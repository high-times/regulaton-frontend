<template>
    <v-container
            fluid
            width="100">
        <v-row>
            <v-col cols="8" class="mx-12">
            <v-card-title>
            <h1>Add New project</h1>
            </v-card-title>
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                width>
            <v-row align="center">
                <v-col align="right">
                    <v-icon class="mx-5" @click="close" medium>mdi-close</v-icon>
                </v-col>
            </v-row>
            <v-text-field
                    v-model="CylinderNumber"
                    :counter="10"
                    :rules="nameRules"
                    label="Cylinder Number"
                    required
                    box
            ></v-text-field>
            <v-text-field
                    v-model="EKCNumber"
                    :rules="emailRules"
                    label="EKC Number"
                    required
                    box
            ></v-text-field>
            <v-text-field
                    v-model="MINumber"
                    :rules="items"
                    label="MI Number"
                    required
                    box
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
                    :disabled="!valid"
                    :color="this.$vuetify.theme.themes.light.inventory"
                    @click="Save"
                    class="white--text float-right, mr-4"
                    rounded>
                SAVE
            </v-btn>
        </v-form>
            </v-col>
        </v-row>
        </v-container>
</template>

<script>
    import InventoryAddCylinder from '../components/InventoryAddCylinder.vue'
    import router from "../router"
    export default {
        name:"InventoryAddCylinder",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            close() {
                router.push({ name: 'inventory' });
            },
        },
    }
</script>