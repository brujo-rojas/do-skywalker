<template>
  <div class="starwars-container">
    <div class="loading" v-if="isLoading">Cargando ...</div>
    <div class="list">
      <ul>
        <li
          :class="{ active: profile == profileSelected }"
          v-for="(profile, index) in profiles"
          @click="selectProfile(profile)"
          :key="index"
        >
          {{ profile.name }}
        </li>
      </ul>
    </div>
    <div class="profile" v-if="profileSelected">
      <h2>
        {{ profileSelected.name }}
      </h2>
      <p><b>Height: </b> {{ profileSelected.height }} cm</p>
      <p><b>Mass: </b> {{ profileSelected.mass }} kg</p>

      <hr />
      <div v-if="planetSelected">
        <h2>
          {{ planetSelected.name }}
        </h2>
        <p><b>Diameter: </b> {{ planetSelected.diameter }} km</p>
        <p><b>Terrain: </b> {{ planetSelected.terrain }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      profiles:[],
      profileSelected: null,
      planetSelected: null,
    };
  },
  async mounted() {
    this.isLoading = true;
    let resProfiles = await fetch("https://swapi.dev/api/people").then((r) =>
      r.json()
    );
    this.isLoading = false;
    this.profiles = resProfiles.results;
    await this.selectProfile(this.profiles[0]);
  },
  methods: {
    async selectProfile(profile) {
      this.profileSelected = profile;
      this.planetSelected = null;
      this.planetSelected = await fetch(profile.homeworld).then((r) =>
        r.json()
      );
    },
  },
};
</script>

<style lang="scss">
.starwars-container {
  text-align: left;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;

  .list {
    padding: 2em;
    ul {
      li {
        padding: 0.25em;
        cursor: pointer;
        text-decoration: underline;
        &.active {
          font-weight: bold;
        }
      }
    }
  }

  .profile {
    padding: 2em;
  }
}
</style>
