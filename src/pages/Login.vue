<template>
  <ui-brand-layout>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" no-gutters class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-toolbar dark prominent color="primary">
              <v-toolbar-title>Вход</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Outlined"
                  variant="outlined"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="login-actions">
              <v-btn> Войти </v-btn>
              <v-btn> Зарегистрироваться </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </ui-brand-layout>
</template>
