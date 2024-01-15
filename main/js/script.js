
// window.addEventListener("scroll", () => {
//     if (scrollY > "1420" && scrollY < "4400"){
//       document.querySelector('html').style.scrollBehavior= "auto";
//     } else {
//       document.querySelector('html').style.scrollBehavior= "smooth";
//     }
// })







const images = [...document.querySelectorAll('.back_img')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const infoImg = document.querySelector('.info_img');


let textsInfoo = {
  one : [ "النزهة (لوحة)" , "يخلق عمل الفرشاة الخفيف والعفوي الذي أستخدمه مونيه رشقات من الألوان. «كاميل»، مرتدية ملابس بيضاء وترتدي قبعة محجبة، تقف على تل، جسدها ينزاح قليلاً عن المركز، لكنها متوازنة بصرياً بالمظلة الخضراء التي تحملها. نظرتها الشديدة وموقف جسدها يشير إلى أنها أدركت فجأة وجود المتفرج واستدارت رداً على ذلك، مما خلق وهمًا مقنعًا بالحركة التي تم التقاطها على الفور. يظهر خلفها وإلى يسار ابنهما «جان»، الذي كان في الثامنة من عمره تقريبًا، وهو أيضًا يحدق باهتمام في المشاهد. يمنح خط الأفق المنخفض وموضع الجسم مقابل السماء الشكل إحساسًا بالتميز غير المعتاد في لوحات مونيه، لا يمكن رؤيت الصبي إلا من الخصر إلى أعلى، مما يخلق إحساسًا بالعمق."],
  tow : [ "الشاطئ في تروفيل" , "إنها تركيبة غير نمطية إلى حد ما ، حيث تم تصوير الشخصيات من مسافة قريبة، وهذا يمكن أن يشير إلى أن اللوحة بدأت كرسم تخطيطي لتكوين أكبر. قد تكون المرأة الموجودة على اليسار هي كاميل، زوجة الرسام، بينما يبدو أن الأخرى هي زوجة الرسام يوجين بودين ، الذي كان لمشاهد شاطئه بالتأكيد تأثير على أعمال مونيه.ومن الناحية اللونية، تتميز اللوحة بالتباين القوي بين الجلباب الأبيض في الضوء الكامل والوجوه في الظل. وتشهد بعض حبيبات الرمل الموجودة في طبقة الزيت على القماش على أن العمل قد تم إنجازه بالفعل في الهواء الطلق ."],
  three : [ "انطباع، شروق الشمس" , "تصور لوحة (انطباع، شروق الشمس) ميناء لوهافر في وقت الشروق؛ حيث أن العناصر المركزية في اللوحة هي القاربان الصغيرين الواقعين في المقدمة، والشمس الحمراء. كما تم وضع المزيد من قوارب الصيد في المنتصف بينما نجد في خلفية الجهة اليسرى من اللوحة سفنًا شراعية بصواري طويلة  يقع خلفها أشكالًا ضبابية أخرى وهي «ليست أشجارًا بل أكوام دخانية من السفن والبواخر، وفي الأفق على اليمين صوارٍ أخرى ومداخن تظلل السماء». ولإظهار هذه الخواص للصناعة أزال مونيه بيوتًا كانت موجودة على يسار رصيف الميناء كي لا تحجب الخلفية."],
  four : [ "بركة واترليلي مع الجسر الياباني" , "لوحة شهيرة من حديقة مونيه في جيفرني ، كان يعيش فيها منذ عام 1893 ، عندما بدأ بيع المزيد من اللوحات. كان يعمل بستاني خاص به لرعاية زنابق الماء. تم بناء الجسر وفقًا للنموذج الياباني. إنه يقف في وسط الصورة ويعمل بمثابة تناقض متناغم مع ظلال اللون الأخضر المتشابكة ، الانعكاسات غير الواضحة في الماء والأفرع المعلقة من صفصاف البكاء على الجانب الأيسر من الصورة. يستبدل القوس اللطيف للجسر الأفق المفقود ويعطي في نفس الوقت بنية الصورة واتساعها. رسم مونيه أكثر من 250 صورة لزنابق الماء. يعد هذا أيضًا جزءًا من سلسلة بها جسر وواحد من العناصر الأكثر شهرة في فترة إبداعه الانطباعية من عام 1868. اشترى مونيه نباتات غريبة لحديقة زنبق الماء الخاصة به وجمع بين ألوان الزهور المختلفة بحيث ينبعث توهج حيوي من الماء. القصب والقزحية على حدود البركة وتشير إلى الجسر. مجموعة متناغمة من الطبيعة والثقافة."],
  five : [ "باين لا غرينويلير" , "La Grenouillère هو المكان المناسب لقصة غي دي موباسان القصيرة لعام 1881 La femme de Paul. يوصف بأنه مكان نشتم فيه، في أعماق أنوفنا، زبد العالم، وكل الأوغاد المتميزين فيه، وعفن المجتمع الباريسي: مزيج من الباعة، والمتباهين، والصحفيين المتواضعين، والشباب المرافقين، وهواة الفساد الفاسدين. البورصة، حيوانات الحفلات البلهاء، الباحثين عن المتعة القدامى المجففين، حشد مشبوه من جميع الكائنات المشبوهة، نصف معروفين، نصف ضائعين، نصف مرحب بهم، نصف مهينين، المحتالين، الأوغاد، موردي النساء، أسياد الصناعة ذوي النظرات الكريمة، نظرة متبجح يبدو وكأنه يقول: أول من وصفني بالمارق، سأقبض عليه"]
}


const popupImage = document.getElementById('popup');


let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        let path = `imgs/img${i+1}.jpg`;
        popup.classList.toggle('active');
        popupImage.style.backgroundImage = `url(${path})`;

        setTimeout(() => {
            infoImg.classList.add("show")
          }, 1000);

    })
})

const updateImage = (i) => {
    let path = `imgs/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;


    switch (index) {
      case 0:
        infoImg.innerHTML = textsInfoo.one[1] , imageName.innerHTML = textsInfoo.one[0];
        break;
      case 1:
        infoImg.innerHTML = textsInfoo.tow[1] , imageName.innerHTML = textsInfoo.tow[0];
        break;
      case 2:
        infoImg.innerHTML = textsInfoo.three[1] , imageName.innerHTML = textsInfoo.three[0];
        break;
      case 3:
        infoImg.innerHTML = textsInfoo.four[1] , imageName.innerHTML = textsInfoo.four[0];
        break;
      case 4:
        infoImg.innerHTML = textsInfoo.five[1] , imageName.innerHTML = textsInfoo.five[0];
        break;
    }

}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
    setTimeout(() => {
        infoImg.classList.remove("show")
      }, 1000);
})






var myAnimation = new hoverEffect({
    parent: document.querySelector('#back_img1'),
    angle: Math.PI / 8,
    image1: 'imgs/img1.png',
    image2: 'imgs/img1.png',
    displacementImage: 'displacement/10.jpg',
});


var myAnimation = new hoverEffect({
    parent: document.querySelector('#back_img2'),
    angle: Math.PI / 8,
    image1: 'imgs/img2.jpg',
    image2: 'imgs/img2.jpg',
    displacementImage: 'displacement/14.jpg',
});


var myAnimation = new hoverEffect({
    parent: document.querySelector('#back_img3'),
    angle: Math.PI / 8,
    image1: 'imgs/img3.jpg',
    image2: 'imgs/img3.jpg',
    displacementImage: 'displacement/14.jpg',
});

var myAnimation = new hoverEffect({
  parent: document.querySelector('#back_img4'),
  angle: Math.PI / 8,
  image1: 'imgs/img4.jpg',
  image2: 'imgs/img4.jpg',
  displacementImage: 'displacement/14.jpg',
});

var myAnimation = new hoverEffect({
  parent: document.querySelector('#back_img5'),
  angle: Math.PI / 8,
  image1: 'imgs/img5.jpg',
  image2: 'imgs/img5.jpg',
  displacementImage: 'displacement/14.jpg',
});










const container = document.querySelector(".container_wrapper");
const sections = gsap.utils.toArray(".container_wrapper section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container_wrapper",
    pin: true,
    scrub: 1,
    end: "+=3000",
  }
});


// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: false
    }
  });
});