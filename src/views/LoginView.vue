<script setup>
import { useForm, useField } from 'vee-validate'

const { handleSubmit } = useForm()

const email = useField('email')
const password = useField('password')


</script>

<template>
  <v-card
    flat
    max-width="600"
    class="mx-auto my-10"
  >
    <v-card-title
      class="text-h4 font-weight-bold"
    >
      Iniciar Sesión
    </v-card-title>

    <v-card-subtitle>
      Inicia sesión para acceder a tu cuenta
    </v-card-subtitle>

    <v-form class=" mt-5">
      <v-text-field
        type="email"
        label="Email"
        bg-color="blue-grey-lighten-5"
        v-model="email.value.value"
      />

      <v-text-field
        type="password"
        label="Password"
        bg-color="blue-grey-lighten-5"
        v-model="password.value.value"
      />

      <v-btn
        color="pink-accent-3"
      >
        Iniciar Sesión
      </v-btn>
    </v-form>
  </v-card>
</template>
