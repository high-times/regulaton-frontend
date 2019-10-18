<template>
    <v-card class="mt-10 mx-auto elevation-3"
            flat
            max-width="800"
    >
        <!--        row one is for "add new cylinder"-->
        <v-container align="center" style="padding:0;">
            <v-row>
                <v-col>
                    <v-toolbar class="text-center" flat>
                        <v-toolbar-title style="width:100%;">
                            <h2 :style="`width:100%; color: ${this.$vuetify.theme.themes.light.inventory};`"
                            >Add
                                Cylinder Details</h2></v-toolbar-title>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon @click="close" class="mx-5" medium>mdi-close</v-icon>
                        </v-btn>

                    </v-toolbar>
                    <v-form
                            class="ma-5"
                            lazy-validation
                            ref="form"
                            v-model="valid"
                            width>

                        <v-text-field
                                :counter="10"
                                :rules="nameRules"
                                box
                                label="Cylinder Number"
                                required
                                v-model="CylinderNumber"
                        ></v-text-field>
                        <v-text-field
                                :rules="EKC"
                                box
                                label="EKC Number"
                                required
                                v-model="EKCNumber"
                        ></v-text-field>
                        <v-text-field
                                :rules="items"
                                box
                                label="MI Number"
                                required
                                v-model="MINumber"
                        ></v-text-field>
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        :value="due"
                                        label="Due Date"
                                        prepend-icon="mdi-account"
                                        v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>
                        <v-btn
                                :color="this.$vuetify.theme.themes.light.inventory"
                                :disabled="!valid"
                                @click="Save"
                                class="white--text float-right, mr-4, ma-5"
                                rounded
                        >
                            SAVE
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>

    import router from "../router"

    export default {
        name: "InventoryAddCylinder",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Cylinder Number is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            EKC: [
                v => !!v || 'EKC is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            // checkbox: false,

        }),

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            }
            ,
            reset() {
                this.$refs.form.reset()
            }
            ,
            resetValidation() {
                this.$refs.form.resetValidation()
            }
            ,
            close() {
                router.push({name: 'inventory'});
            }
            ,
        }
        ,
    }
</script>

