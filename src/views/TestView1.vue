<template>
  <div class="question-container">
    <div class="question" v-for="(q, index) in questions" :key="index">
      <span>
        {{ q.title }}
      </span>
      <pre>
      {{ q.answer }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
          price: 3000,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
          price: 3800,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
          price: 1300,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
          price: 3900,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
          price: 4100,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
          price: 4800,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
          price: 2600,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
          price: 3400,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
          price: 930,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          price: 1400,
        },
      ],
      questions: [],
    };
  },
  mounted() {
    let answer1 = this.desserts
      .filter((d) => d.calories < 300)
      .map((d) => d.name);
    let answer2 = this.desserts
      .filter((d) => d.protein > 4)
      .reduce((acc, d) => acc + d.price, 0);
    let answer3 = this.desserts
      .sort((a, b) => a.fat - b.fat)
      .slice(0, 3)
      .map((d) => d.name);
    this.questions = [
      {
        title: "Obtener aquellos postres bajos en calorías (< 300 kcal/100g)",
        answer: answer1,
      },
      {
        title: "Obtener costo total de los postres con más de 4 g de proteínas",
        answer: answer2,
      },
      {
        title: "Obtener los 3 postres con menos grasa",
        answer: answer3,
      },
    ];
  },
};
</script>

<style lang="scss">
.question-container {
  text-align: left;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;

  .question {
    padding: 2em;
    margin: 1em;
    background: white;
    flex: 1 0 auto;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    pre {
      background: #c8e6c9;
      padding: 2em;
      border: 1px solid #388e3c;
      border-radius: 3px;
    }
  }
}
</style>
