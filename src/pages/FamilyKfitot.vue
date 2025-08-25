<template>
  <div class="container">
    <h1>כפיתות טוניסאיות</h1>
    <h2>המתכון של סבתא ורדה – מוגש כל שישי בצהריים</h2>

    <img src="@/assets/grandma-kiftes.jpg" alt="כפיתות טוניסאיות של סבתא ורדה" />

    <div class="note">
      מתכון משפחתי שעובר מדור לדור – טעם של בית ושל שבת.
    </div>

    <h3>רכיבים:</h3>
    <ul>
      <li>1 ק"ג בשר טחון (חצי עוף חצי בקר)</li>
      <li>2 ביצים</li>
      <li>1 כוס פירורי לחם</li>
      <li>4 שיני שום כתושות</li>
      <li>1/2 כוס פטרוזיליה קצוצה</li>
      <li>מלח, פלפל שחור, כמון לפי הטעם</li>
      <li>שמן לטיגון</li>
    </ul>

    <h3>אופן ההכנה:</h3>
    <ol>
      <li>מערבבים את כל החומרים לקציצות בקערה עד לקבלת תערובת אחידה.</li>
      <li>מכדררים לכדורים קטנים (כפיתות).</li>
      <li>מחממים שמן במחבת רחבה ומטגנים את הכפיתות מכל הצדדים עד להשחמה.</li>
      <li>אפשר להוסיף את הכפיתות לרוטב אדום עם תפוחי אדמה ולהמשיך לבשל עוד 20 דקות על אש נמוכה.</li>
    </ol>

    <div class="note">
      סבתא ורדה תמיד מגישה את הכפיתות עם לחם פריך וסלט עגבניות קצוץ דק. הכי טעים בעולם!
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyRecipe"
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #fefbf3;
  direction: rtl;
}

h1, h2 {
  text-align: center;
  color: #9a1e1e;
}

img {
  display: block;
  max-width: 100%;
  margin: 20px auto;
  border-radius: 8px;
}

ul {
  padding-right: 20px;
}

.note {
  background-color: #fff6e0;
  padding: 10px;
  border-right: 5px solid #ffc107;
  margin: 20px 0;
}
</style>
