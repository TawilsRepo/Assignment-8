
var quotes = [
  {
    quote: "كان خلق النبي صلى الله عليه وسلم القرآن",
    author: "عائشة بنت أبي بكر (رضي الله عنها)--"
  },
  {
    quote: "من خاف الله لم يضره أحد، ومن خاف غير الله لم ينفعه أحد.",
    author: "الفضيل بن عياض رحمه الله--"
  },
  {
    quote: "الصبر كنز من كنوز الجنة ، وإنما يدرك الإنسان الخير كله بصبر ساعة",
    author: "الحسن البصري رحمه الله--"
  },
  {
    quote: "لا تعتمد على خلق رجل حتى تجربه عند الغضب",
    author: "عمر بن الخطاب رضى اللّه عنه--"
  },
  {
    author: "علي بن أبي طالب رضى الله عنه--",
    quote: "من زهد في الدنيا هانت عليه المصائب"
  },
  {
    quote: "إن أحببت أن يدوم الله لك على ما تحبُّ، فدم له على ما ُيحبُ",
    author: "أحمد بن حنبل رحمه الله--"
  },
  {
    author: "يحيى بن معاذ رحمه الله--",
    quote: "من خان الله عز وجل في السر هتك سره في العلانية"
  },
  {
    author: "عمر بن عبد العزيز رحمه الله--",
    quote: "إذا دعتك قدرتك على ظلم الناس فتذكر قدرة الله عليك"
  },
];



function change() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomIndex].quote;
  document.getElementById("author").innerHTML = quotes[randomIndex].author;
}
