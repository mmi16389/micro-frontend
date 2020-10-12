<template>
  <v-card>
    <v-toolbar color="white" style="background:#3B4654;">
      <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Recherche avancée"
        prepend-inner-icon="mdi-magnify"
        style="background:white"
        solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs v-model="tabs" style="color:white" centered>
          <v-tab v-for="n in 3" :key="n"> Micro Front {{ n }} </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>
