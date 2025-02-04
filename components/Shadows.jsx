import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import Siyane from "../public/siyane_replacement.jpg";
import Shadows_1 from "../public/2024_New_Internationalist_magazine_Addis_Aemero-7 (1).jpg";
import Shadows_2 from "../public/2024_New_Internationalist_magazine_Addis_Aemero-173.jpg";
import Shadows_3 from "../public/2024_New_Internationalist_magazine_Addis_Aemero-147.jpg";
// ? shadow 4 replaced
import Shadows_4 from "../public/shadow_4_replacement.jpg";
import Shadows_5 from "../public/shadow_5_replacement.jpg";
import Shadows_6 from "../public/2024_New_Internationalist_magazine_Addis_Aemero-71.jpg";
import Seyoum from "../public/Seyoum Antonios.jpeg";
import { Libre_Baskerville } from "next/font/google";
import Quote from "../utils/Quote";
import { Hyperlinks } from "../utils/Hyperlinks";
import localfont from "next/font/local";
import Image from "next/image";
const aileron = localfont({
  src: "../app/Aileron-Regular.woff2",
});
const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});
const libre_baskerville_italic = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});
const Page = () => {
  // let [ref, { width }] = useMeasure();
  // let length = slideData.length;
  // const [count, setCount] = useState(0);
  // let previous = usePrevious(count);
  // let direction = count > previous ? 1 : -1;
  return (
    <div className="mx-auto flex h-auto w-full flex-col gap-16 md:w-10/12 md:gap-24">
      {/* //? section 1 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="in the shadows"
          title="in the shadows"
          para="‘It looks like nothing is happening, but they are strongly working under the surface,’ Abebe Shibru, MSI’s country director says from his office in the Bole area of Addis. Recently, he notes, opposition tactics have shifted. ‘Before, the anti-choice groups were targeting the public, they were more visible, shouting, demonstrating and telling people abortion is a sin,’ he says. ‘Now they are targeting politicians, decision-makers, safe abortion practitioners – they are trying to cripple the system.’"
        />
        <ImageWrapper
          key="shadow-1"
          alt="shadow-1"
          // sevenXL={true}
          imageURL={Shadows_1}
          caption=" The Ethiopia director of MSI Abebe Shibru
            warns that anti-abortion groups are trying to ‘cripple the system’
            of abortion provision. ADDIS AEMERO"
        />

        <TitlePara
          key="shibru"
          para={
            <>
              Shibru noticed the shift around the same time as the seismic Dobbs
              ruling that overturned the constitutional right to abortion in the
              US. Early{" "}
              <Hyperlinks key="Research" word="research" linkNumber={3} /> into
              the global impact of this decision has linked it to the reversal
              of positive steps towards liberalizing abortion policies in Kenya
              and Nigeria.
            </>
          }
        />
        <TitlePara
          key="christian rights"
          para={
            <>
              One of the US Christian Right groups that’s pushing its influence
              into Africa is Family Watch International (FWI), an Arizona-based
              Mormon organization that describes its work as ‘strengthening the
              family’. FWI has a{" "}
              <Hyperlinks
                key=" track record"
                word=" track record"
                linkNumber={4}
              />{" "}
              of influencing regressive policies on SRHR in several countries.
              In 2019, it appointed an Ethiopian celebrity physician named
              Seyoum Antonios as its Africa director. As the home of the African
              Union headquarters, Addis offers a gateway to a host of the
              continent’s leaders and policymakers.
            </>
          }
        />
        <TitlePara
          key="roe vs wade"
          para="Shortly after the overturning of Roe v Wade, Antonios took to his YouTube channel to call on the Ethiopian government to follow in the footsteps of the US. If the ‘greatest democracy in the world’ doesn’t allow abortions, he argued, why should we?"
        />
      </section>
      {/* //? section 2 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="pro life pioneers"
          title="pro-life pioneers"
          para={
            <>
              The sticky fingers of US Christian Right groups are all over
              Ethiopia’s anti-abortion movement. Antonios and his wife Saba set
              up what could be considered Ethiopia’s first organized ‘pro-life’
              group in 2007. United for Life Ethiopia (ULE) is listed in the
              world registry of Heartbeat International, a US-based network of
              ‘crisis pregnancy centres’ (CPCs). These centres have been found
              by a series of{" "}
              <Hyperlinks
                key="
              global investigations
                
                "
                word="global investigations"
                linkNumber={5}
              />{" "}
              to provide ‘deliberate disinformation’ to vulnerable women to
              coerce them into continuing unwanted pregnancies.
            </>
          }
        />
        <ImageWrapper
          key="shadow-2"
          alt="minaret"
          caption="An American Christian missionary opened the first known crisis pregnancy centre in Ethiopia in the southern city of Adama, around 100km from Addis, in 2010. ADDIS AEMERO"
          // sevenXL={true}
          imageURL={Shadows_2}
        />
        <TitlePara
          key="dina monahan"
          para="Dinah Monahan, a missionary from Arizona and a Heartbeat International ‘servant leader’, opened the first known CPC in Ethiopia in the southern city of Adama, around 100km from Addis, in 2010. In a video published on a ‘pro-life’ platform, staff at the Living Hope Maternity Home describe how teenage girls and rape victims were persuaded to continue unwanted pregnancies. That institution closed five years later, but another home has since been set up in Addis Ababa. It appears the missionary has had an influence on organized opposition to abortion in Ethiopia. In a recent photo on her group’s Facebook page, she’s pictured next to a man wearing a ‘pray to end abortion’ T-shirt. The man, staff at the MSI clinic confirm, is the same taxi driver who harasses their clients."
        />
        <TitlePara
          key="ministry"
          para="Monahan denies that staff at the ministry play a role in the women’s decisions not to have abortions. In a response over email, she says: ‘They changed their mind about abortion (we were not involved at all) and someone told them about how we could assist them. There are people who talk to women going into the abortion clinics offering them educational information, but they are not affiliated with us.’"
        />
        <TitlePara
          key="more woring"
          para={
            <>
              {" "}
              More worrying are claims made by Monahan to her followers that
              some healthcare professionals in public hospitals and clinics are
              referring women seeking abortions to the Christian activists.
              Antonios and his wife also appear on Monahan’s YouTube channel
              where they are touted as ‘the original pro-life heroes in
              Ethiopia’. A practising physician at a private hospital in Addis
              and an assistant professor at a medical college, Antonios uses
              YouTube and TikTok to spread harmful pseudo-science, claiming that
              abortion causes infertility, cancer and depression. The doctor has{" "}
              <Hyperlinks
                key="amassed over one million views"
                word="amassed over one million views"
                linkNumber={6}
              />{" "}
              on his channels since 2018, where he claims to have ‘prayed with
              the prime minister’ – himself an evangelical Christian – and has
              made appearances several times on national TV.
            </>
          }
        />
        <TitlePara
          key="antonio"
          para="Antonios is also known to preach to his patients. One Ethiopian woman, now living in the US, recalls being treated by the physician in 2019: ‘He was telling me abortions are immoral, homosexuality is a disease… and organizations like the UN are promoting the downfall of our country.’"
        />
        <Quote
          key="abortions are immoral"
          quote="‘He was telling me abortions are immoral, homosexuality is a disease… and organizations like the UN are promoting the downfall of our country.’"
        />
        <TitlePara
          key="easy to dismiss"
          para={
            <>
              {" "}
              It would be easy to dismiss these unfounded ramblings if Antonios
              and his wife were not key figures in Africa’s anti-rights
              ecosystem, touring the continent and coordinating campaigns to
              halt any semblance of progress on SRHR. Multiple{" "}
              <Hyperlinks
                key="investigations"
                word="investigations"
                linkNumber={4}
              />{" "}
              have found links between FWI and several anti-LGBTQI+ bills in
              Africa. The organization has been accused of helping Uganda pass
              one of the harshest anti-gay laws in the world last year, and is{" "}
              <Hyperlinks
                key="actively lobbying"
                word="actively lobbying"
                linkNumber={4}
              />{" "}
              politicians in Kenya and Ghana to pass similar legislation. FWI
              has repeatedly denied these accusations.
            </>
          }
        />

        <ImageWrapper
          caption="In 2019, the Arizona-based Mormon organization Family Watch International (FWI) appointed the celebrity surgeon Seyoum Antonios (L) as its Africa director. Antonios is pictured here with FWI founder Sharon Slater (in purple) and Ugandan President Yoweri Museveni (in white) outside Uganda's State House in April 2023 during a conference on 'family values'. NATIONAL RESISTANCE MOVEMENT."
          key="seyoum"
          alt="seyoum"
          imageURL={Seyoum}
          bodyWidth
        />

        <TitlePara
          key="logical to assume"
          para="‘I think it is logical to assume that if this is happening in other African countries, it is a matter of time before it happens here,’ says a rights activist in Addis, who requested anonymity for security reasons. In 2021 Antonios used his growing influence to successfully block comprehensive sexuality education curricula in Ethiopian schools, claiming it ‘sexualizes children’ and gives them ‘easy access to abortion and homosexuality’."
        />
        <TitlePara
          key="conflation of abortion rights"
          para="This conflation of abortion rights with LGBTQI+ advocacy is another old tactic of the ‘anti-abortion’ movement, which targets deeply conservative and patriarchal countries to push its ‘family values’ agenda. (Antonios did not respond to requests for comment)."
        />
        <TitlePara
          key="ongoing social and political tension"
          para={
            <>
              {" "}
              Ongoing social and political tensions in Ethiopia from the fallout
              of the war in the northern Tigray region, including{" "}
              <Hyperlinks
                key="active fighting"
                word="active fighting"
                linkNumber={7}
              />{" "}
              in many parts of the country, make issues like abortion an easy
              scapegoat for religious conservative groups.
            </>
          }
        />
        <TitlePara
          key="common enemy"
          para="‘[People] need a common enemy,’ says the activist. ‘They need a distraction. Generally Ethiopians are not ones to uprise … but now it’s pushing the point beyond which people are tolerant. There are a lot more evangelicals in positions of power than before, and you can see them trying to flex their power.’"
        />
        <Quote
          key="Evangelicals"
          quote="‘There are a lot more evangelicals in positions of power than before, and you can see them trying to flex their power.’"
        />
      </section>
      {/* //? section 3 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="prayers in a palace"
          title="prayers in a palace"
          para="Constitutionally, Ethiopia is a secular state. Shared spaces and government buildings are supposed to be free from any religious expressions. But the current administration under prime minister Abiy Ahmed has facilitated the entry of religion into the political discourse, while recent years have seen an explosion in evangelical churches in Ethiopia."
        />
        <TitlePara
          key="anti rights movement"
          para="‘I think there’s a lot of space for anti-rights movements right now,’ says Sehin Teferra, the founder of feminist organization Setaweet. ‘A lot of it is cloaked behind religious values.’ New alliances are also forming between previous religious foes – the hard-right Evangelicals and hard-right Orthodox – who have found common ground on their anti-rights agendas."
        />
        <TitlePara
          key="nexus"
          para={
            <>
              ‘It’s a good nexus to meet on,’ Teferra continues. ‘We don’t have
              this culture of street protest, either pro or against. So you
              don’t get visible activity around abortion. It’s a very slow
              erosion, so I think one day we [could] wake up and a woman will
              find out she can no longer have an abortion.’ Research shows that
              religious language has recently been{" "}
              <Hyperlinks
                key="seeping into mainstream media"
                word="seeping into mainstream media,"
                linkNumber={8}
              />{" "}
              cultivating a platform for anti-abortion messaging. Reforms to
              Ethiopia’s media law in 2021 mean that religious organizations can
              now receive broadcasting licences for the first time in the
              country’s history.
            </>
          }
        />
        <Quote
          key="one day"
          quote="‘I think one day we [could] wake up and a woman will find out she can no longer have an abortion’"
        />
        <TitlePara
          key="fundamentalist"
          para={
            <>
              {" "}
              The growing influence of fundamentalist religious groups has
              worrying implications in a country where the situation for women’s
              rights is already dire. ‘We have a culture that views women as
              property,’ says Abebe Kebede, who leads the Consortium of
              Reproductive Health Associations. ‘We have practices where women’s
              bodies are mutilated in the guise of subduing their sexual
              promiscuity.’ Despite being criminalized, harmful traditional
              practices like female genital mutilation persist in Ethiopia. In
              the Amhara region,{" "}
              <Hyperlinks
                key="
              45 percent of girls
                
                "
                word="45 percent of girls"
                linkNumber={9}
              />{" "}
              are married before the age of 18.
            </>
          }
        />
      </section>
      {/* //? section 4 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="saving lives"
          title="‘I know that I am saving lives’"
          para="As concerted efforts by shadowy networks to roll back abortion rights in Africa play out behind the scenes, work in Ethiopia’s family planning clinics continues as normal. In one of MSI’s largest clinics in Addis, we meet Ferket*, 24, who sought a termination after she was impregnated by a colleague who raped her at a work event."
        />
        {/* //? video-narration-2 */}
        <div className="flex w-full flex-col gap-1 md:gap-2">
          <div className="relative aspect-video w-full md:aspect-video">
            <div className="absolute inset-0">
              <video
                // autoPlay
                loop
                // poster='/'
                controls
                // contloop='true'
                mutedrols="true"
                muted
                width="100%"
                height="100%"
              >
                <source
                  src="Narration 2 (Made by Headliner).mp4"
                  type="video/mp4"
                />
              </video>
              {/* {/* <video src={loop_video} controls='false'></video> */}
            </div>
          </div>
          <div
            className={`${aileron.className} flex w-full justify-between text-xs md:text-sm`}
          >
            <span>Read by a voice actor.</span>
            <span>Photo: ADDIS AEMERO</span>
          </div>
        </div>
        <TitlePara
          key="scared"
          para="‘I was so scared when I found out I was pregnant,’ she says. ‘After the abortion I felt relieved from the burden.’ Despite
        meeting the legal criteria for abortion, the young woman says she still
        feels like a sinner, and kept it a secret from her family. Abortion remains highly stigmatized in Ethiopia, and a lack of awareness about legal rights to the procedure is a huge barrier to accessing care, particularly in rural areas."
        />
        <TitlePara
          key="stigma"
          para={
            <>
              And it’s not just clients who face stigma – according to a recent{" "}
              <Hyperlinks key=" report " word="report" linkNumber={11} /> from
              Amnesty International, providers, advocates and activists
              defending abortion worldwide are increasingly facing physical and
              verbal attacks, intimidation, threats and criminalization, with
              little to no accountability. Siyane Aniley, an Ethiopian SRHR
              researcher says that anti-rights figures on social media have
              accused her and other advocates of promoting LGBTQI+ rights as a
              ‘hidden agenda’.
            </>
          }
        />
        <TitlePara
          key="threatening"
          para="‘It was really threatening,’ she says. ‘I felt
              unsafe just for advocating for young people’s rights to SRHR
              information and services.’ Homosexuality is a criminal offence in
              Ethiopia and highly stigmatized."
        />
        {/* //?  following pic needs replacing */}
        <ImageWrapper
          key="siyane"
          alt="Siyane"
          imageURL={Siyane}
          bodyWidth={true}
          caption="Siyane Aniley, an Ethiopian sexual and reproductive rights
            researcher, says anti-right figures on social media have accused her
            of promoting a 'hidden agenda'. AMANUEL SILESHI"
          // sevenXL
        />
        <TitlePara
          key="adama"
          para="In Adama, staff in a clinic run by the Family Guidance Association of Ethiopia (FGAE) – a member association of the International Planned Parenthood Federation (IPPF) – describe their experiences of working in a hostile environment. ‘My family forbade me to join FGAE because of abortion,’ says Lydia Tesfaye, a nurse. ‘But if I refuse to provide a service and she goes somewhere else and dies due to complications, my hand is there in her case.’ Occasionally disapproval has turned into violence. Tesfaye recalls how a man wielding a knife threatened her colleague in another clinic where his wife had an abortion. Asked whether these stories worry her, Tesfaye replies: ‘No. Instead they make me stronger to provide these services.’"
        />
        <ImageWrapper
          // sevenXL={true}
          caption="Nurse Lydia Tesfay handles medication at the Family Guidance Association of Ethiopia’s clinic in the southern city of Adama. ADDIS AEMERO"
          key="abortion"
          alt="contraceptive pills"
          imageURL={Shadows_3}
        />
        {/* //? change aspect of this image */}
        {/* <ImageWrapper key="clinic" alt="nurse" imageURL={Shadows_4} /> */}

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-1 md:gap-2">
          <div className="relative h-[30rem] w-full md:h-[80rem]">
            <div className="absolute h-full w-full object-cover">
              <Image
                alt="family ward"
                src={Shadows_4}
                fill={true}
                objectFit="cover"
              />
            </div>
          </div>
          <div
            className={`${aileron.className} mx-auto w-full text-left text-xs text-gray-500 md:text-base`}
          >
            Clients enter a clinic run by the Family Guidance Association of
            Ethiopia, an IPPF member association, in Adama. ADDIS AEMERO
          </div>
        </div>
        <TitlePara
          key="Eskedar"
          para="Eskedar Melesse, the clinic coordinator for FGAE in Adama, says she often hears sermons on the ‘evils’ of abortion at church. ‘It shames you, and makes you feel that you are doing something wrong,’ she says. ‘But I know that I am saving lives.’"
        />
        {/* ??//* replace this image */}
        <ImageWrapper
          caption="Eskedar Melesse is the clinic coordinator for FGAE in Adama. She says she often hears sermons on the ‘evils’ of abortion at church. ADDIS AEMERO"
          // sevenXL={true}
          key="family ward"
          alt="family ward"
          imageURL={Shadows_5}
        />
        {/* //?images */}
        <TitlePara
          key="amara"
          para="Those lives include Amara*, a sex worker, who says she considered suicide after finding out she was pregnant. The 20-year-old also works as a waiter, trying to scrape together enough income to provide for her younger sister who she’s raised alone in the absence of her parents. An outreach volunteer with FGAE’s commercial sex worker programme informed Amara about her options for safe and legal abortion. ‘That was the first time I slept in weeks,’ she says, offering a small smile."
        />
        {/* //? video-narration-1 */}
        <div className="flex w-full flex-col gap-1 md:gap-2">
          <div className="relative aspect-video w-full md:aspect-video">
            <div className="absolute inset-0">
              <video
                // autoPlay
                loop
                // poster='/'
                controls
                // contloop='true'
                mutedrols="true"
                muted
                width="100%"
                height="100%"
              >
                <source
                  src="Narration 1 (Made by Headliner).mp4"
                  type="video/mp4"
                />
              </video>
              {/* {/* <video src={loop_video} controls='false'></video> */}
            </div>
          </div>
          <div
            className={`${aileron.className} mx-auto flex w-full justify-between text-xs md:text-sm`}
          >
            <span>Read by a voice actor.</span>
            <span>Photo: ADDIS AEMERO</span>
          </div>
        </div>
        <TitlePara
          key="lifesaving"
          para={
            <>
              But not everyone is able to access these lifesaving services.
              Women living in Ethiopia’s conflict zones are particularly
              vulnerable to any rollbacks in abortion access. It has been widely{" "}
              <Hyperlinks key="documented" word="documented" linkNumber={11} />{" "}
              that over the course of the two-year war in Tigray, troops
              fighting in support of the federal government committed widespread
              rape against Tigrayan women and girls. Today the healthcare
              service in the region has all but collapsed, and maternal
              mortality rates are once again{" "}
              <Hyperlinks key="soaring" word="soaring" linkNumber={12} /> across
              the region.
            </>
          }
        />
        <TitlePara
          key="nearly"
          para=" Nearly one million people are displaced in
              Tigray, and one of the few remaining health care centres for
              survivors of gender-based violence is run by Sister Mulu Mesfin in
              the region’s capital, Mekelle. ‘Most of the women who come to us
              are survivors of rape and gang rape,’ she says. ‘Even after the war, they
              are still repeatedly getting attacked in the [displacement] camps
              [and] facing domestic violence. They beg at my feet for abortion
              pills.’"
        />
        <Quote
          key="survivors"
          quote="‘Most of the women who come to us are survivors of rape and gang rape, Even after the war, they are still repeatedly getting attacked in the [displacement] camps [and] facing domestic violence. They beg at my feet for abortion pills.’"
        />
      </section>
      {/* //? section 5 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="on the side"
          title="on side"
          para="Back in Addis Ababa, Demeke and Shibru’s fears over a serious and imminent threat to the 2005 abortion law have subsided. In recent months Ethiopia’s Ministry of Health has shown its commitment to abortion provision by approving the latest guidelines for abortion care services, as well as a self-care manual for women on medication abortion (abortion using pills). The Coalition for Comprehensive Abortion Care, a group of physicians in Ethiopia that works closely with the health ministry, has received verbal assurances from the department that it is aware of the threats and will ‘defend the law by any means’, says Desta. Where physicians are more concerned is the extent to which young healthcare workers could be swayed by anti-rights groups.   "
        />
        <TitlePara
          key="a third of"
          para={
            <>
              A{" "}
              <Hyperlinks
                key="third of abortions"
                word="third of abortions"
                linkNumber={13}
              />{" "}
              in Ethiopia are performed in public hospitals, where the procedure
              is free of charge. The rest take place in private clinics,
              predominantly run by international NGOs like MSI and IPPF. Unlike
              Desta, who experienced the devastating impact of abortion bans on
              women in the early 2000s, the next generation of doctors are not
              aware of this history.
            </>
          }
        />

        <TitlePara
          key="they don't know"
          para="‘They don’t know about that story, how
              women were dying of these complications, so they can easily be
              attracted to the opposition groups with their false and arrogant
              arguments,’ he says. Although doctors are legally obliged in
              Ethiopia to provide abortions if a woman meets the criteria for
              the procedure, cases of conscientious objection are not uncommon.
              Doctors who provide abortions also face stigma by their
              colleagues, says Aniley, who explains that healthcare workers talk
              of being insulted or accused of profiting from performing
              terminations, even though the procedure is free."
        />
        <ImageWrapper
          key="shadow-6"
          // sevenXL={true}
          alt="Aemero-6"
          imageURL={Shadows_6}
          caption=" A health worker does her daily rounds at an MSI clinic in Addis
            Ababa. Foreign donors, including the United States, account for 70
            percent of Ethiopia's family planning budget. ADDIS AEMERO"
        />
      </section>
      {/* //? section 6 */}
      <section className="mx-auto flex w-full flex-col gap-6 md:gap-8">
        <TitlePara
          key="fickle funding"
          title="fickle funding"
          para={
            <>
              {" "}
              While NGO workers we spoke to stress that the opposition is so far
              not impacting the provision of safe abortion care in their
              clinics, funding is a more pressing worry. Foreign donors,
              including the United States,{" "}
              <Hyperlinks
                key="budget"
                word="account for 70 percent of Ethiopia’s
              family planning budget"
                linkNumber={13}
              />
              , making the country highly susceptible to cuts. When then-US
              President Donald Trump implemented the ‘global gag rule’ – a
              policy that prohibits foreign NGOs that receive US funding from
              providing abortion services – it was a major blow. FGAE and MSI{" "}
              <Hyperlinks
                key="refused to comply"
                word="refused to comply"
                linkNumber={13}
              />{" "}
              meaning millions of people lost access to services and the system
              faltered as a result of programmes ending.
            </>
          }
        />
        <TitlePara
          key="Biden"
          para="President Joe Biden has since repealed the gag rule, but Desta worries that another Trump presidency could spell disaster in Ethiopia. ‘We will try to find alternative options but I don't think we will have robust funding that will really fill the gap,’ he says."
        />
        <TitlePara
          key="FWI"
          para={
            <>
              Meanwhile, groups like FWI have{" "}
              <Hyperlinks
                key="funneled millions of dollars"
                word="funneled millions of dollars"
                linkNumber={14}
              />{" "}
              into anti-rights advocacy efforts in Africa and around the world.
              As Ethiopia continues to face a myriad of social, political and
              economic challenges, abortion rights – and sexual and reproductive
              health and rights more broadly – can easily fall down the list of
              priorities. But the human rights and public health implications of
              Ethiopia’s abortion law go far beyond the walls of clinics, or the
              rented room of a ‘pro-life’ taxi driver. As Teferra says:
              ‘Ethiopian women are losing our rights left, right and centre as
              it is. Losing this would be such a terrible mistake, not just for
              women but for the country in general.’
            </>
          }
        />
        <div
          className={`${libre_baskerville_italic.className} mx-auto flex w-full max-w-5xl flex-col gap-1 text-xs italic md:text-sm`}
        >
          <p>This story has been produced with funding support from IPPF.</p>
          <p>*Names have been changed to protect identities.</p>
        </div>
        <div
          className={`${libre_baskerville.className} mx-auto w-full max-w-5xl text-xs md:text-sm`}
        >
          This article also appears in print in our July/August 2024 issue,{" "}
          <a
            href="https://newint.org/issues/2024/05/16/debt-which-way-out"
            className="text-blue-600 underline"
          >
            Abortion: Why is your body still a battleground?
          </a>
        </div>
      </section>
    </div>
  );
};
export default Page;
