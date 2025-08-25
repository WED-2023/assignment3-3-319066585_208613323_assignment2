<template>
  <div class="container">
    <h1>סביח של שבת בבוקר</h1>
    <h2>המנה של סבא יוסף – שבת ישראלית אמיתית</h2>

    <img src="@/assets/sabich-grandpa.jpg" alt="סביח עם חציל מטוגן וערוק" />

    <div class="note">
      זה הסביח של שבת בבוקר – לאפה חמימה עם חצילים מטוגנים, לביבות ערוק, ביצים קשות וסלט ירקות קצוץ. טעם של בית ושל מסורת!
    </div>

    <h3>מתי אוכלים?</h3>
    <p>שבת בבוקר, אחרי בית הכנסת או כשכל המשפחה קמה. לפעמים גם בצהריים כשנשאר חציל מהטיגון 😄</p>

    <h3>רכיבים:</h3>
    <ul>
      <li>2 לאפות גדולות</li>
      <li>1 חציל פרוס לטבעות, מטוגן בפירורי לחם</li>
      <li>3 ביצים קשות</li>
      <li>טחינה מוכנה</li>
      <li>עמבה (לא חובה – למבינים)</li>
      <li>סלט ירקות קצוץ קטן</li>
      <li>לביבות ערוק (ראו למטה)</li>
    </ul>

    <h4>רכיבים ללביבות ערוק:</h4>
    <ul>
      <li>1 תפוח אדמה מגורד</li>
      <li>1 בצל קטן מגורד</li>
      <li>2 כפות קמח</li>
      <li>1 ביצה</li>
      <li>חצי כוס פטרוזיליה + כוסברה קצוצה</li>
      <li>מלח, פלפל, כמון</li>
      <li>שמן לטיגון</li>
    </ul>

    <h3>אופן ההכנה:</h3>
    <ol>
      <li>מטגנים את פרוסות החציל בציפוי פירורי לחם עד להזהבה.</li>
      <li>מבשלים את הביצים, מקלפים וחותכים לפרוסות.</li>
      <li>מערבבים את כל מרכיבי הערוק, יוצרים לביבות ומטגנים משני הצדדים.</li>
      <li>מורחים טחינה על הלאפה, מוסיפים חצילים, ערוק, ביצה, סלט, ועמבה (למי שאוהב).</li>
      <li>מגלגלים, מחממים קלות בטוסטר לחיצה – ומגישים.</li>
    </ol>

    <div class="note">
      סבא יוסף תמיד אמר: “סביח אמיתי מתחיל באהבה לחציל!”
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilySabich"
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
  background-color: #f9fef3;
  direction: rtl;
}

h1, h2 {
  text-align: center;
  color: #3e4c00;
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
  background-color: #fefee0;
  padding: 10px;
  border-right: 5px solid #ffc107;
  margin: 20px 0;
}
</style>
