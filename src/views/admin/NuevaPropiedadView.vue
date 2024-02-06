<script setup>
  const items = [1,2,3,4,5]
</script>

<template>
  <v-card
    max-width="800"
    flat
    class="mx-auto my-10"
  >
    <v-card-title
      class="text-h4 font-weight-bold"
      tag="h3"
    >
      Nueva Propiedad
    </v-card-title>

    <v-card-subtitle
      class="text-h6 py-3"
    >
      Crea una nueva propiedad llenando el siguiente formulario
    </v-card-subtitle>

    <v-form class="mt-10">
      <v-text-field
        class="mb-5"
        label="Titulo Propiedad"
      />

      <v-file-input
        accept="image/jpeg"
        label="Fotografía"
        prepend-icon="mdi-camera"
        class="mb-5"
      />

      <v-text-field
        class="mb-5"
        label="Precio"
      />

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-select
            label="Habitaciones"
            class="mb-5"
            :items="items"
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select
            label="wc"
            class="mb-5"
            :items="items"
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select
            label="Lugares Estacionamiento"
            class="mb-5"
            :items="items"
          />
        </v-col>
      </v-row>

      <v-textarea class="mb-5" label="Descripción"></v-textarea>

      <v-checkbox
        class="mb-5"
        label="Alberca"
      />  

      <v-btn
        color="pink-accent-3"
      >
        Agregar Propiedad
      </v-btn>
    </v-form>
  </v-card>
</template>
