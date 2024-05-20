import { ptoSnegMeta }  from "../../articles/pto-snegotayanie/meta.js";
import { ptoAdvant } from "../../articles/advantage-plates/meta.js";
import { campusAkadMeta } from "../../articles/uobj-campus-akademiya/meta.js";
import { timashevskConditMeta } from "../../articles/uobj-condit-timashevsk/meta.js";
import { clinic1Groznii } from "../../articles/uobj-clinic1-groznii/meta.js";
import { gdGroznii } from "../../articles/uobj-gd-groznii/meta.js";
import { ssoshKislovodsk } from "../../articles/uobj-sosh-16-kislovodsk/meta.js";
import { pivovarCraft } from "../../articles/uobj-pivovar-craft/meta.js";
import { pivovarArmavir } from "../../articles/uobj-pivovar-armavir/meta.js";
import { essentukyZavod1 } from "../../articles/uobj-essentuki-zavod-1/meta.js";
import { stavropolWaterFood1 } from "../../articles/uobj-stavropol-waterfood-1/meta.js";
import { btpElabugaFirst } from "../../articles/uobj-btp-elabuga-first/meta.js";
import { ptoSadyPridonya } from "../../articles/uobj-pto-sady-pridonya/meta.js";
import { btpTatarAkad } from "../../articles/uobj-btp-tatar-akad-teatr/meta.js";
import { btpFkKrasnodarAdyg } from "../../articles/uobj-btp-fk-kradn-adyg/meta.js";
import { btpGkAvangard } from "../../articles/uobj-btp-gk-avangard/meta.js";
import { ptoGkDargrad } from "../../articles/uobj-pto-gk-dargrad/meta.js";

/* - Чисто для карточек - */
/* Плюс картинки с метаданными подтягиваются при заходе на страницу */

export const initialArticles = [
  /*{
    tags: ['gkh', 'prod'],
    linkPath: `/info/teploobmenniki-snegotayaniya.html`,
    heading: 'Производство блочных тепловых узлов',
    description: 'Фото с проивзводство, как мы следим за качеством тепловых пунктов',

    tagsForPtoPage: ['pto-food'],
    tagsForPtoPage: ['btp'],
    tagsForPtoPage: ['pto-gkh'],

  },*/
{
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['spec'],
    isObj: false,
    linkPath: `/info/teplovoy-punkt-sistemy-otopleniya.html`,
    heading: 'Тепловые пункты в системе отопления',
    description: 'Тепловой пункт ...',
    images: ptoAdvant,
    size: 'medium',
    isColorInverse: true,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/blochnyj-teplovoj-punkt-fk-krasnodar.html`,
    heading: 'Учебно-тренировочная база ФК Краснодар',
    description: 'Тепловой пункт ...',
    images: btpFkKrasnodarAdyg,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/blochnyj-teplovoj-punkt-zhk-avangard-yalta.html`,
    heading: 'Жилой комплекс «Авангард», г. Ялта',
    description: 'Тепловой пункт',
    images: btpGkAvangard,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: true,
    linkPath: `/info/teploobmenniki-v-zhk-dargrad-krasnodar.html`,
    heading: 'Жилой комплекс ЖК Дарград, Новая Адыгея',
    description: '22 разборных пластинчатых теплообменника',
    images: ptoGkDargrad,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/teplovoj-uzel-v-krymskotatarskom-akademicheskom-teatre.html`,
    heading: 'Крымско-Татарский Академический драматический театр',
    description: 'Тепловой пункт ...',
    images: btpTatarAkad,


    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['pto-food'],
    isObj: true,
    linkPath: `/info/teploobmenniki-v-sadah-pridonya.html`,
    heading: 'Сады Придонья',
    description: 'Теплообменник ТИ13 для нагрева технологической воды паром',
    images: ptoSadyPridonya,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['spec'],
    isObj: false,
    linkPath: `/info/teplovoy-punkt-goryachego-vodosnabzheniya-gvs.html`,
    heading: 'Тепловые пункты в системе горячего водоснабжения',
    description: 'Тепловой пункт ...',
    images: ptoAdvant,
    size: 'medium',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/blochnyj-teplovoj-punkt-3493-kvt-v-oaz-elabuga.html`,
    heading: 'Автоматизированный машиностроительный комплекс аконит-урал (оэз алабуга)',
    description: 'Тепловой пункт ...',
    images: btpElabugaFirst,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['gkh', 'prod'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: false,
    linkPath: `/info/teploobmenniki-snegotayaniya.html`,
    heading: 'Пластинчатые теплообменники для систем снеготаяния',
    description: 'Теплообменники для обеспечения таяния снега',
    images: ptoSnegMeta,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['prod'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: false,
    linkPath: `/info/preimushchestva-plastinchatykh-teploobmennikov.html`,
    heading: 'Преимущества пластинчатых теплообменников',
    description: 'Подробнее о преимуществах',
    images: ptoAdvant,

    size: 'big',
    isColorInverse: true,
  },
  /* Объекты */
  {
    tags: ['obj', 'btp'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/blochnyi-teplovoi-punkt-campus-akademya.html`,
    heading: 'Многофунциональный центр Академия в городе Симферополь',
    description: 'Изготовление блочных тепловых пунктов для кампуса',
    images: campusAkadMeta,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-gvs-kondit-timashevsk.html`,
    heading: 'Кондитерский комбинат в г. Тимошевск',
    description: 'Два теплообменника на горячее водоснабжение',
    images: timashevskConditMeta,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-gvs-clinic-groznii.html`,
    heading: 'Клиническая больница №1 в г. Грозный',
    description: 'Два теплообменника на горячее водоснабжение, каждый по 800 кВт',
    images: clinic1Groznii,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-sneg-gd-groznii.html`,
    heading: 'Жилой дом г. Грозный',
    description: 'Теплообменник ТИ077 системы снеготаяния в коттедже',
    images: gdGroznii,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'btp'],
    tagsForPtoPage: ['btp'],
    isObj: true,
    linkPath: `/info/blochnyi-teplovoi-punkt-sosh-kislovodsk.html`,
    heading: 'МБОУ СОШ №16 г. Кисловодск',
    description: 'Блочный тепловой пункт из 3х блоков: гвс, отопление, вентиляция',
    images: ssoshKislovodsk,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-food'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-piva-orenburg.html`,
    heading: 'Оренбургский пивоваренный завод Крафт',
    description: 'Теплообменник на охлаждение пивного сусла 6 т/ч',
    images: pivovarCraft,

    size: 'small',
    isColorInverse: false,
  },
  /* */
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-food'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-piva-armavir.html`,
    heading: 'Армавирский Пивоваренный Завод № 1',
    description: 'Теплообменники на охлаждение сиропа и на охлаждение пивного сусла 5 т/ч',
    images: pivovarArmavir,

    size: 'small',
    isColorInverse: true,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-food'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-food-essentuky.html`,
    heading: 'Ессентукский Завод Минеральных Вод',
    description: 'Теплообменники на охлаждение технической воды в пищевом исполнении',
    images: essentukyZavod1,

    size: 'small',
    isColorInverse: false,
  },
  {
    tags: ['obj', 'pto'],
    tagsForPtoPage: ['pto-gkh'],
    isObj: true,
    linkPath: `/info/plastinchatye-teploobmenniki-water-food-company-stavropol.html`,
    heading: 'Ставропольская Водно-Пивная Компания',
    description: 'Теплообменник на горячее водоснабжение',
    images: stavropolWaterFood1,

    size: 'small',
    isColorInverse: false,
  },
];

