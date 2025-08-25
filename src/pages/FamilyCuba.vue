<template>
  <div class="container">
    <h1>קובה של סבתא מרסל</h1>
    <h2>המנה של סבתא מרסל – טעם של בית עיראקי</h2>

    <img src="@/assets/kubeh-marcelle.jpg" alt="צלחת קובה אדומה עם לימון בצד" />

    <div class="note">
      קובה של סבתא מרסל זו מסורת – אוכלים בצהריים של אמצע השבוע, במיוחד כשמגיעים הביתה מהעבודה רעבים. מרק אדום חם, קובה רכה מבפנים, וקצת לימון בצד. זה כל מה שצריך.
    </div>

    <h3>מתי נהוג להכין את זה?</h3>
    <p>יום שלישי או רביעי בצהריים, לפעמים גם כשמישהו חולה ורוצים שיתחמם מבפנים ☺️</p>

    <h3>רכיבים:</h3>
    <ul>
      <li>1 כוס סולת</li>
      <li>1/2 כוס מים</li>
      <li>קצת מלח</li>
      <li>למילוי: בצל מטוגן, בשר טחון, פטרוזיליה ותבלינים (כמון, קינמון, מלח, פלפל)</li>
      <li>למרק: 1 בצל, 1 גזר, 1 סלק, רסק עגבניות, מיץ לימון, סלרי, מלח, סוכר, מים</li>
    </ul>

    <h3>אופן ההכנה:</h3>
    <ol>
      <li>מכינים את הבצק מהסולת והמים. לשים ומניחים לנוח חצי שעה.</li>
      <li>מכינים את המלית – מטגנים בצל, מוסיפים בשר ותבלינים עד שזה מוכן.</li>
      <li>מרטיבים ידיים, יוצרים כדורים מהסולת, ממלאים במלית וסוגרים.</li>
      <li>בסיר עמוק מטגנים בצל, מוסיפים את הגזר והסלק, מוסיפים רסק עגבניות ותבלינים.</li>
      <li>מוסיפים מים, סלרי, מביאים לרתיחה ואז מוסיפים את הקובות בזהירות.</li>
      <li>מבשלים על אש קטנה כ-40 דקות עד שהקובות מתרככות.</li>
    </ol>

    <div class="note">
      כל פעם שסבתא מרסל מבשלת – הריח מגיע עד המדרגות. אסור לפספס!
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyKubeh"
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
  background-color: #fff6f6;
  direction: rtl;
}

h1, h2 {
  text-align: center;
  color: #870000;
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
  background-color: #fff2e2;
  padding: 10px;
  border-right: 5px solid #ff6f00;
  margin: 20px 0;
}
</style>
