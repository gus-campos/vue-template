<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
  import { useField, useForm } from 'vee-validate';
  import { ref } from 'vue';
  import z from 'zod';

  const loading = ref(false);

  // Schema

  const schema = z.object({
    email: z.email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });

  // Formulário

  const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const { value: email, errorMessage: emailError } = useField<string>('email');
  const { value: password, errorMessage: passwordError } = useField<string>('password');

  // Submissão

  const submit = handleSubmit(async (values) => {
    loading.value = true;
    try {
      alert(JSON.stringify(values));
    } finally {
      loading.value = false;
    }
  });
</script>

<template>
  <v-sheet>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="email" label="Email" type="email" :error-messages="emailError" />

      <v-text-field
        v-model="password"
        label="Senha"
        type="password"
        :error-messages="passwordError"
      />

      <v-btn :loading="loading" class="mt-2" text="Submit" type="submit" block />
    </v-form>
  </v-sheet>
</template>
