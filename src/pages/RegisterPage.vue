<template>
  <div class="container mt-4" style="max-width: 500px;">
    <h2 class="mb-4">Register</h2>
    <b-form @submit.prevent="register">
      <!-- Username -->
      <b-form-group label="Username" label-for="username">
        <b-form-input
          id="username"
          v-model="state.username"
          @blur="v$.username.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.username.$error">
          <div v-if="!v$.username.required">Username is required.</div>
          <div v-else-if="!v$.username.minLength || !v$.username.maxLength">
            Username must be 3–8 characters.
          </div>
          <div v-else-if="!v$.username.alpha">Username must contain only letters.</div>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Firstname -->
      <b-form-group label="Firstname" label-for="Firstname">
        <b-form-input
          id="Firstname"
          v-model="state.firstname"
          @blur="v$.firstname.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.firstname.$error">
          <div v-if="!v$.firstname.required">Firstname is required.</div>
          <div v-else-if="!v$.firstname.minLength">
            Firstname must be at least 3 characters.
          </div>
          <div v-else-if="!v$.firstname.alpha">Firstname must contain only letters.</div>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Lastname -->
      <b-form-group label="Lastname" label-for="Lastname">
        <b-form-input
          id="Lastname"
          v-model="state.lastname"
          @blur="v$.lastname.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.lastname.$error">
          <div v-if="!v$.lastname.required">Lastname is required.</div>
          <div v-else-if="!v$.lastname.minLength">
            Lastname must be at least 3 characters.
          </div>
          <div v-else-if="!v$.lastname.alpha">Lastname must contain only letters.</div>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Country -->
      <b-form-group label="Country" label-for="country">
        <b-form-select
          id="country"
          v-model="state.country"
          :options="countries"
          @change="v$.country.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.country.$error">
          Country is required.
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Password -->
      <b-form-group label="Password" label-for="password">
        <b-form-input
          id="password"
          type="password"
          v-model="state.password"
          @blur="v$.password.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.password.$error">
          <div v-if="!v$.password.required">Password is required.</div>
          <div v-else-if="!v$.password.minLength || !v$.password.maxLength">
            Password must be 5–10 characters.
          </div>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Confirm Password -->
      <b-form-group label="Confirm Password" label-for="confirmPassword">
        <b-form-input
          id="confirmPassword"
          type="password"
          v-model="state.confirmPassword"
          @blur="v$.confirmPassword.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.confirmPassword.$error">
          <div v-if="!v$.confirmPassword.required">Confirmation is required.</div>
          <div v-else-if="!v$.confirmPassword.sameAsPassword">
            Passwords do not match.
          </div>
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Email -->
      <b-form-group label="Email" label-for="email">
        <b-form-input
          id="email"
          type="email"
          v-model="state.email"
          @blur="v$.email.$touch()"
        />
        <b-form-invalid-feedback v-if="v$.email.$error">
          <div v-if="!v$.email.required">Email is required.</div>
          <div v-else-if="!v$.email.email">Email must be valid.</div>
        </b-form-invalid-feedback>
      </b-form-group>


      <b-button type="submit" variant="success" class="w-100">Register</b-button>

      <b-alert
        variant="danger"
        class="mt-3"
        dismissible
        v-if="state.submitError"
        show
      >
        Registration failed: {{ state.submitError }}
      </b-alert>

      <div class="mt-2">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from '@vuelidate/validators';
import rawCountries from '../assets/countries';

export default {
  name: 'RegisterPage',
  setup() {
    const state = reactive({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      confirmPassword: '',
      country: '',
      email: '',
      submitError: null,
    });

    const rules = computed(() => ({
      username: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(8),
        alpha,
      },
      firstname: {
        required,
        minLength: minLength(3),
        alpha,
      },
      lastname: {
        required,
        minLength: minLength(3),
        alpha,
      },
      password: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(10),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs(state.password, 'Passwords must match')
      },
      email: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(50),
        email,
      },
      country: { required },
    }));

    const v$ = useVuelidate(rules, state);

    const register = async () => {
      const valid = await v$.value.$validate();
      if (!valid) return;

      try {
        await window.axios.post('/Register', {
          username: state.username,
          firstname: state.firstname,
          lastname: state.lastname,
          password: state.password,
          country: state.country,
          email: state.email,
        });
        window.toast('Registration successful', 'You can now login', 'success');
        window.router.push('/Login');
      } catch (err) {
        state.submitError = err.response?.data?.message || 'Unexpected error.';
      }
    };

    return {
      state,
      countries: ['Select a country', ...rawCountries],
      register,
      v$,
    };
  },
};
</script>

