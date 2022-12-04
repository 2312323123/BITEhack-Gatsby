import * as React from 'react'
import * as styles from '../../styles/regulamin_content.module.css'
import RegulaminSectionHeader from './RegulaminSectionHeader'
import FooterRegulamin from '../commonComponents/FooterRegulamin'
import SpaceHeader from '../commonComponents/SpaceHeader'

export default function RegulaminContent() {
  return (
    <main className={styles['regulamin_background']}>
      <SpaceHeader header="REGULAMIN" />
      <RegulaminSectionHeader header="§1" />
      <RegulaminSectionHeader header="POSTANOWIENIA OGÓLNE" />
      <ol className={styles['regulamin_list']}>
        <li>
          Niniejszy regulamin BITEhack – BEST IT Extended Hackathon (zwany dalej
          “Regulaminem”) określa zasady i warunki, na których odbywa się BEST IT
          Extended Hackathon (zwany dalej „Hackathonem”).
        </li>
        <li>
          Organizatorem wydarzenia jest Stowarzyszenie Studentów BEST AGH
          Kraków, z siedzibą pod adresem: DS “Alfa” Blok 1 ul. Reymonta 17/E14
          30-059 Kraków (zwany dalej „Organizatorem”).
        </li>
      </ol>

      <RegulaminSectionHeader header="§2" />
      <RegulaminSectionHeader header="TERMIN I MIEJSCE" />
      <ol className={styles['regulamin_list']}>
        <li>
          Hackathon odbywa się w dniach 14-15 stycznia 2023 w budynku Klubu
          Studio, w Krakowie przy ul. Witolda Budryka 4.
        </li>
      </ol>

      <RegulaminSectionHeader header="§3" />
      <RegulaminSectionHeader header="DEFINICJE" />
      <p className={styles['regulamin_clarification']}>
        Na potrzeby niniejszego regulaminu poniższym pojęciom przypisuje się
        następujące znaczenie:
      </p>
      <ol className={styles['regulamin_list']}>
        <li>
          Uczestnik – osoba fizyczna posiadająca zdolność do czynności prawnych,
          która w dniu rozpoczęcia Hackathonu
          (tj.&nbsp;14&nbsp;stycznia&nbsp;2023) nie ukończyła 26. roku życia
          oraz posiada status studenta. Uczestnik nie musi być studentem
          Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie.
        </li>
        <li>Drużyna – zespół złożony z 2-4 Uczestników.</li>
      </ol>

      <RegulaminSectionHeader header="§4" />
      <RegulaminSectionHeader header="WARUNKI UCZESTNICTWA" />
      <ol className={styles['regulamin_list']}>
        <li>Udział w Hackathonie jest dobrowolny, bezpłatny i otwarty.</li>
        <li>
          Każda Drużyna może wziąć udział w jednej z trzech kategorii:
          „Klasycznej”, „Robotycznej” lub „Artificial Intelligence” (zwana dalej
          “AI”).
        </li>
        <li>Uczestnik może być członkiem tylko jednej Drużyny.</li>
        <li>
          Warunkiem udziału jest wypełnienie i przesłanie Organizatorowi
          formularza zgłoszeniowego.
        </li>
        <li>
          Organizator zastrzega sobie prawo do sprawdzenia tożsamości Uczestnika
          w celu zweryfikowania statusu studenta.
        </li>
        <li>
          Zgłoszenia Drużyny dokonuje Uczestnik, wyznaczony do tego przez
          pozostałych Uczestników, wchodzących w skład Drużyny. Zgłoszenie
          Drużyny jest jednoznaczne z zaakceptowaniem niniejszego Regulaminu
          przez wszystkich Uczestników wchodzących w skład Drużyny, a także
          wyrażeniem przez nich zgody na przetwarzanie danych osobowych przez
          Organizatora w celach związanych z organizacją Hackathonu, a także na
          otrzymywanie korespondencji mailowej od Organizatora w celach
          związanych z organizacją Hackathonu.
        </li>
        <li>
          W zależności od liczby zgłoszeń Organizator zastrzega sobie prawo do
          ograniczenia liczby miejsc w przypadku, gdyby liczba zgłoszonych
          drużyn przekroczyła założony limit osób. W tej sytuacji Drużyny
          biorące udział w Hackathonie zostaną wybrane przez Organizatora na
          podstawie formularza zgłoszeniowego.
        </li>
        <li>
          Organizator nie ponosi odpowiedzialności za ewentualne straty i
          uszkodzenia we własności osobistej uczestników.
        </li>
        <li>
          Organizator nie bierze odpowiedzialności za wszelkie uszczerbki na
          zdrowiu powstałe z winy Uczestnika.
        </li>
        <li>
          Uczestnikom biorącym udział w kategorii „Robotycznej” Organizator
          udostępnia na czas Hackathonu dodatkowy sprzęt, który będą mogli
          wykorzystać do realizacji swoich projektów. Lista dostępnego sprzętu
          będzie udostępniona uczestnikom dnia 07.01.2023r.
        </li>
        <li>
          Uczestnicy korzystający z urządzeń i sprzętu zapewnionych przez
          Organizatora są zobligowani do dbania o powierzony sprzęt oraz do
          zgłoszenia Organizatorowi wszelkich ewentualnych awarii.
        </li>
        <li>
          Uczestnicy ponoszą odpowiedzialność za używany sprzęt zapewniony przez
          Organizatora i w uzasadnionych przypadkach, kiedy szkoda powstała z
          winy Uczestnika, mogą zostać pociągnięci do odpowiedzialności
          finansowej za ewentualne straty i uszkodzenia.
        </li>
        <li>
          Uczestnik odpowiada za wyrządzone przez siebie szkody na terenie
          obiektu, gdzie odbywać się będzie Hackathon.
        </li>
        <li>
          Nazwa Drużyny nie może zawierać wulgaryzmów, treści obraźliwych,
          sloganów faszystowskich, nazistowskich, komunistycznych,
          rasistowskich, seksistowskich i innych zabronionych przez polskie
          prawo, a także wszelkiego rodzaju treści, które mogłyby zostać źle
          odebrane, w szczególności treści wzywających do nienawiści lub
          mogących urazić czyjąkolwiek godność osobistą.
        </li>
        <li>
          Uczestnicy zobowiązani są do stawienia się na miejscu wydarzenia w
          terminie określonym w niniejszym regulaminie.
        </li>
        <li>
          czestnicy mają pełną dowolność wyboru technologii, w których będą
          tworzyli projekty konkursowe, jednak Organizator nie ma obowiązku
          zapewnienia żadnego dodatkowego sprzętu z tego tytułu.
        </li>
        <li>
          Jeśli Uczestnicy kategorii Robotycznej chcą skorzystać dodatkowo z
          własnych części wymagane jest przesłanie ich listy do zatwierdzenia na
          adres e-mail Organizatora do dnia 10.01.2023. Drużyna nie może
          korzystać z części, które nie zostały zatwierdzone przez Organizatora
          pod karą dyskwalifikacji z udziału w hackathonie.
        </li>
        <li>Projekt musi w całości powstać w czasie trwania Hackathonu.</li>
        <li>
          Organizator informuje, że program Hackathonu zakłada przez Uczestników
          wykonywanie czynności o dużej intensywności przez okres 24 godzin.
        </li>
        <li>
          Uczestnik stwierdza, że nie ma żadnych przeciwwskazań zdrowotnych, aby
          mógł uczestniczyć w Hackathonie.
        </li>
      </ol>

      <RegulaminSectionHeader header="§5" />
      <RegulaminSectionHeader header="PRZEBIEG HACKATHONU" />
      <ol className={styles['regulamin_list']}>
        <li>
          Hackathon będzie przebiegał według harmonogramu udostępnionego
          Uczestnikom na początku wydarzenia. Organizator zastrzega sobie prawo
          do zmiany harmonogramu w trakcie wydarzenia.
        </li>
        <li>
          Organizator w trakcie Hackathonu zapewni: dostęp do Internetu za
          pomocą kabla ethernet, zasilanie elektryczne, dodatkowy sprzęt dla
          uczestników kategorii „Robotycznej” (paragraf 4, punkt 10), wyżywienie
          oraz napoje. Organizator zapewnia także Uczestnikom dostęp do strefy
          relaksu przez cały czas trwania wydarzenia.
        </li>
        <li>
          Przed prezentacją finałowego rozwiązania Uczestnicy umieszczają swoje
          prezentacje w dowolnym repozytorium cyfrowym dostępnym dla
          organizatorów.
        </li>
      </ol>

      <RegulaminSectionHeader header="§6" />
      <RegulaminSectionHeader header="ZADANIA" />
      <ol className={styles['regulamin_list']}>
        <li>
          W ramach Hackathonu przeprowadzone zostaną niezależne od siebie
          konkursy, których przedmiotem będzie opracowanie rozwiązań podanych
          problemów z kategorii “Klasycznej”, “Robotycznej” lub „AI”.
        </li>
        <li>
          Zadania to zagadnienia z zakresu informatyki lub robotyki, polegające
          na stworzeniu przez Drużynę autorskiego rozwiązania o tematyce
          przedstawionej w treści zadania.
        </li>
        <li>
          Uczestnicy zobowiązani są wybrać jedną z trzech kategorii podczas
          rejestracji Drużyny. Niemożliwa jest późniejsza zmiana kategorii, w
          której bierze udział Drużyna.
        </li>
        <li>
          Każdy Konkurs z wyjątkiem kategorii “Robotycznej” rozpoczyna się
          przedstawieniem tematu zadania przez osobę wyznaczoną przez
          Organizatora. Temat kategorii “Robotycznej” podany zostanie
          Uczestnikom dnia 07.01.2023r.
        </li>
        <li>
          Po rozpoczęciu Hackathonu Uczestnicy mają 24 godziny na rozwiązanie
          zadań. Uczestnik ma możliwość ukończenia zadania wcześniej niż
          wyznaczony czas, jednak organizator nie umożliwia prezentacji
          rozwiązań wcześniej niż w czasie przewidzianym regulaminem.
        </li>
      </ol>

      <RegulaminSectionHeader header="§7" />
      <RegulaminSectionHeader header="JURY I WYBÓR ZWYCIĘZCÓW" />
      <ol className={styles['regulamin_list']}>
        <li>
          Oceny i weryfikacji zadań dokonuje Jury wyznaczone przez Organizatora.
        </li>
        <li>Wyrok Jury jest niepodważalny, nieodwołalny i ostateczny.</li>
        <li>
          W kategorii “Klasycznej” wyróżniono następujące kryteria oceniania
          wraz z maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>
              Innowacyjność i pomysłowość zaproponowanych rozwiązań – 15 pkt.
            </li>
            <li>Poziom zaawansowania wykorzystanych technologii – 10 pkt.</li>
            <li>Jakość programistyczna projektu - 15 pkt.</li>
            <li>Estetyka i wygląd projektu – 10 pkt.</li>
            <li>
              Potencjał do rozwoju, użyteczność biznesowa/naukowa/przemysłowa –
              25 pkt.
            </li>
            <li>Zgodność z tematyką kategorii – 25 pkt.</li>
          </ol>
        </li>
        <li>
          W kategorii „Robotycznej” wyróżniono następujące kryteria oceniania
          wraz z maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>
              Innowacyjność i pomysłowość zaproponowanych rozwiązań – 25 pkt.
            </li>
            <li>Poziom zaawansowania wykorzystanych rozwiązań - 10 pkt.</li>
            <li>
              Potencjał do rozwoju, użyteczność biznesowa/naukowa/przemysłowa –
              25 pkt.
            </li>
            <li>Stopień ukończenia projektu – 10 pkt.</li>
            <li>Zgodność z tematyką kategorii – 25 pkt.</li>
          </ol>
        </li>
        <li>
          W kategorii “AI” wyróżniono następujące kryteria oceniania wraz z
          maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>Innowacyjność i pomysłowość rozwiązania - 25 pkt.</li>
            <li>
              Realizacja projektu - 60 pkt, w szczególności:
              <ol className={styles['regulamin_list_3rd_level']}>
                <li>
                  Podstawy teoretyczne, zrozumienie i interpretacja wyników,
                  uzasadnienie wykorzystanych technik - 20 pkt.
                </li>
                <li>Skuteczność modelu - 10 pkt.</li>
                <li>Stworzenie działającego POC - 20 pkt.</li>
                <li>Deployment rozwiązania - 10 pkt.</li>
              </ol>
            </li>
            <li>
              Potencjał do rozwoju, użyteczność biznesowa/naukowa/przemysłowa -
              10 pkt.
            </li>
            <li>Formuła i sposób prezentacji - 10 pkt.</li>
          </ol>
        </li>
        <li>
          Każdy członek Jury dokonuje indywidualnej, subiektywnej oceny
          wyceniając dany projekt na odpowiednią liczbę punktów: od 1 do
          maksymalnej liczby, przewidzianej w niniejszym Regulaminie w
          paragrafie 7 pkt. 3,4 i 5. Ocena końcowa jest sumą punktów przyznanych
          przez każdego z członków Jury. Organizator powołuje Jury którego
          kompetencją i obowiązkiem jest wybranie drużyn na podium każdej
          kategorii.
        </li>
        <li>
          W razie rażącej niezgodności z kategorią, Organizator zastrzega sobie
          prawo do wyzerowania punktacji rozwiązania powstałego w czasie
          wydarzenia.
        </li>
        <li>
          Zabronione jest dokonywanie jakichkolwiek zmian w projekcie po upływie
          wyznaczonego czasu.
        </li>
      </ol>

      <RegulaminSectionHeader header="§8" />
      <RegulaminSectionHeader header="WŁASNOŚĆ INTELEKTUALNA" />
      <ol className={styles['regulamin_list']}>
        <li>
          Właścicielami wszelkich praw własności intelektualnej prac, utworów i
          rozwiązań stworzonych w czasie trwania Hackathonu są ich autorzy.
        </li>
        <li>
          Uczestnik oświadcza, że jest autorem lub współautorem wszystkich prac
          wykonywanych podczas Hackathonu i nie naruszają one praw osób
          trzecich.
        </li>
        <li>
          Uczestnik oświadcza, iż ponosi odpowiedzialność z tytułu roszczeń osób
          trzecich kierowanych wobec Organizatora, które powstałyby w związku z
          naruszeniem przez Uczestnika praw autorskich osób trzecich.
        </li>
        <li>
          Obowiązuje kategoryczny zakaz umieszczania w pracach konkursowych
          treści niezgodnych z prawem, kontrowersyjnych oraz innych, które
          mogłyby zostać źle przyjęte, w szczególności:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>wulgarnych,</li>
            <li>
              wzywających do nienawiści na tle rasowym, płciowym, etnicznym,
              narodowościowym, religijnym, lub jakimkolwiek innym,
            </li>
            <li>
              propagujących spożywanie alkoholu lub używanie jakichkolwiek
              używek i/lub substancji psychoaktywnych,
            </li>
            <li>pornograficznych.</li>
          </ol>
        </li>
        <li>
          Organizator zastrzega sobie prawo do opublikowania rozwiązań Drużyn na
          stronie internetowej Hackathonu, a także na portalach w serwisie
          Facebook, Instagram i Linkedin Organizatora oraz Hackathonu.
        </li>
        <li>
          Jeżeli Uczestnicy w trakcie trwania wydarzenia skorzystają z dodatkowo
          płatnej licencji bądź programu komputerowego w celu realizacji
          projektu, Organizator nie ponosi odpowiedzialności za użyte dodatkowo
          płatne licencje bądź programy. Organizator nie jest zobowiązany do
          zwrotu pieniędzy z tytułu zakupionych dodatkowo płatnych licencji bądź
          programów.
        </li>
      </ol>

      <RegulaminSectionHeader header="§9" />
      <RegulaminSectionHeader header="ZASADY PORZĄDKOWE" />
      <ol className={styles['regulamin_list']}>
        <li>
          Uczestnicy na Hackathonie są obowiązani do poszanowania praw i
          godności osobistej innych Uczestników. Uczestników obowiązuje
          bezwzględny zakaz nękania innych Uczestników. Za nękanie przyjmuje
          się: obraźliwe komentarze słowne dotyczące płci, tożsamości płciowej,
          wieku, orientacji seksualnej, niepełnosprawności, wyglądu fizycznego,
          pochodzenia etnicznego, religii, umyślne zastraszanie, prześladowanie
          i niepożądaną uwagę seksualną. Ponadto, podczas Hackathonu zabrania
          się używania słów oraz symboli powszechnie uznanych za niedozwolone, w
          tym wulgaryzmów lub określeń mogących powodować obrazę uczuć
          religijnych lub światopoglądowych oraz wskazujących na dyskryminację.
        </li>
        <li>
          Uczestnicy są zobowiązani zgłosić niezwłocznie do Organizatora
          wszelkie przypadki nieodpowiednich zachowań (w szczególności tych
          wskazanych powyżej) innych Uczestników.
        </li>
        <li>
          Uczestnicy zobowiązani są do użytkowania sprzętu udostępnionego przez
          Organizatora zgodnie z jego przeznaczeniem oraz normami BHP.
          Uczestnicy zobowiązują się zgłosić wszelkie awarie udostępnionego
          sprzętu Organizatorowi.
        </li>
        <li>
          Uczestnicy zobowiązują się do przestrzegania regulaminu obiektu, na
          terenie którego odbywa się Hackathon oraz stosować się do poleceń
          porządkowych Ochrony, a także Organizatora i osób przez niego
          wyznaczonych. Niestosowanie się do poleceń porządkowych może skutkować
          dyskwalifikacją Drużyny z Hackathonu.
        </li>
        <li>
          Podczas trwania Hackathonu, Uczestników obowiązuje całkowity zakaz
          spożywania alkoholu oraz środków odurzających .
        </li>
        <li>
          Uczestnicy zobowiązani są w maksymalnym możliwym zakresie umożliwić
          spokojną pracę pozostałym Drużynom, a w szczególności zabronione jest:
          celowe rozpraszanie pozostałych Drużyn podczas prezentacji oraz
          uniemożliwianie pracy nad projektem pozostałym Drużynom.
        </li>
        <li>
          Uczestnikom zabrania się jakiegokolwiek modyfikowania infrastruktury
          elektrycznej zapewnionej przez Organizatora, w szczególności:
          odklejania taśmy ochronnej, odłączania przewodów zasilających oraz
          dołączania dodatkowych przewodów zasilających bez wyraźnej zgody
          Organizatora.
        </li>
        <li>
          Drużyny, które nie zaprezentują swojego projektu do oceny przez Jury
          Hackathonu zobowiązane są do zwrócenia całego sprzętu zapewnionego
          przez Organizatora.
        </li>
        <li>
          Uczestników uprasza się o dbanie o wizerunek Hackathonu oraz
          Organizatora.
        </li>
      </ol>

      <RegulaminSectionHeader header="§10" />
      <RegulaminSectionHeader header="POSTANOWIENIA KOŃCOWE" />
      <ol className={styles['regulamin_list']}>
        <li>Niniejszy Regulamin wchodzi w życie z dniem 07.01.2023r.</li>
        <li>
          Uczestnicy zobowiązani są do przestrzegania postanowień Regulaminu.
          Organizator zastrzega sobie prawo do zdyskwalifikowania Uczestnika lub
          Drużyny w przypadku naruszenia któregokolwiek postanowienia
          Regulaminu.
        </li>
        <li>
          Uczestnicy, którzy mimo wezwania do zaprzestania łamania postanowień
          Regulaminu nie zastosują się do poleceń Organizatora, zobowiązani są
          do natychmiastowego opuszczenia miejsca odbywania się Hackathonu i nie
          przysługują im z tego tytułu żadne roszczenia względem Organizatora.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany terminu, formy lub
          odwołania wydarzenia z przyczyn od niego niezależnych, które
          uniemożliwiają przeprowadzenie Hackathonu w terminie oraz formie
          określonych w Regulaminie.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany Regulaminu z ważnych
          przyczyn. Uczestnicy zostaną niezwłocznie poinformowani przez
          Organizatora o wszelkich zmianach dokonanych w regulaminie.
        </li>
        <li>
          Organizator jest uprawniony do utrwalania przebiegu Hackathonu za
          pomocą urządzeń rejestrujących obraz i dźwięk.
        </li>
        <li>
          Uczestnik wyraża zgodę na upublicznienie jego wizerunku do celów
          promocji Hackathonu na stronie internetowej oraz w mediach
          społecznościowych Hackathonu oraz Organizatora.
        </li>
        <li>
          We wszelkich sprawach organizacyjnych, w tym w kwestiach spornych w
          trakcie Hackathonu decyduje Organizator.
        </li>
        <li>
          Udział w Hackathonie jest jednoznaczny z akceptacją postanowień
          niniejszego Regulaminu.
        </li>
      </ol>
      <div style={{ height: '5vh' }}></div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="/rodo.pdf"
        style={{
          textAlign: 'center',
          display: 'block',
          color: 'white',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          lineHeight: '1.35',
        }}
      >
        Informacje o danych osobowych
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="/rodoCV.pdf"
        style={{
          textAlign: 'center',
          display: 'block',
          color: 'white',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          lineHeight: '1.35',
        }}
      >
        Informacje o danych osobowych CV
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="/Regulamin-BEST-IT-Extended-Hackathon-BITEhack.pdf"
        style={{
          textAlign: 'center',
          display: 'block',
          color: 'white',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          lineHeight: '1.35',
        }}
      >
        Wersja PDF regulaminu
      </a>
      <FooterRegulamin />
    </main>
  )
}
