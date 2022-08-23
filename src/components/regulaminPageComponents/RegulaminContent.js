import * as React from 'react'
import * as styles from '../../styles/regulamin_content.module.css'
import RegulaminHeader from './RegulaminHeader'
import RegulaminSectionHeader from './RegulaminSectionHeader'
import FooterRegulamin from '../commonComponents/FooterRegulamin'

export default function RegulaminContent() {
  return (
    <main className={styles['regulamin_background']}>
      <RegulaminHeader header="REGULAMIN" />
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
          która w dniu rozpoczęcia Hackathonu (tj. 14 stycznia 2023) nie
          ukończyła 26. roku życia oraz posiada status studenta. Uczestnik nie
          musi być studentem Akademii Górniczo-Hutniczej im. Stanisława Staszica
          w Krakowie.
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
          Zgłoszenia Drużyny dokonuje każdy Uczestnik wchodzący w skład drużyny
          z osobna, zgłaszając się poprzez formularz zgłoszeniowy. Zgłoszenie
          drużyny jest jednoznaczne z zaakceptowaniem niniejszego Regulaminu
          przez wszystkich uczestników wchodzących w skład Drużyny, a także
          wyrażeniem przez nich zgody na przetwarzanie danych osobowych przez
          Organizatora w celach związanych z organizacją Hackathonu, a także na
          otrzymywanie korespondencji e-mail od Organizatora w celach związanych
          z organizacją Hackathonu.
        </li>
        <li>
          W zależności od liczby zgłoszeń Organizator zastrzega sobie prawo do
          ograniczenia liczby miejsc w przypadku, gdyby liczba zgłoszonych
          drużyn przekroczyła założony limit osób. W tej sytuacji Drużyny
          biorące udział w Hackathonie zostaną wybrane przez Organizatora na
          podstawie formularza zgłoszeniowego.
        </li>
        <li>
          Uczestnicy biorą pełną odpowiedzialność za własność osobistą (w tym
          sprzęt komputerowy) i są zobligowani do jej pilnowania. Organizator
          nie ponosi odpowiedzialności za ewentualne straty i uszkodzenia.
        </li>
        <li>
          Uczestnik bierze odpowiedzialność za wszelkie uszczerbki na swoim
          zdrowiu niepowstałe z winy Organizatora.
        </li>
        <li>
          Uczestnikom biorącym udział w kategorii „Robotycznej” Organizator
          udostępnia na czas Hackathonu dodatkowy sprzęt, który będą mogli
          wykorzystać do realizacji swoich projektów. Lista dostępnego sprzętu
          będzie udostępniona uczestnikom na początku wydarzenia.
        </li>
        <li>
          Uczestnicy korzystający z urządzeń i sprzętu zapewnionych przez
          Organizatora są zobligowani do dbania o powierzony sprzęt oraz w
          przypadku wszelkich awarii do ich natychmiastowego zgłoszenia
          Organizatorowi.
        </li>
        <li>
          Uczestnicy ponoszą odpowiedzialność za używany sprzęt zapewniony przez
          Organizatora i w uzasadnionych przypadkach, kiedy szkoda powstała z
          winy Uczestnika, mogą zostać pociągnięci do odpowiedzialności
          finansowej za ewentualne straty i uszkodzenia.
        </li>
        <li>
          Uczestnik stwierdza, że nie ma żadnych przeciwwskazań zdrowotnych, aby
          mógł uczestniczyć w Hackathonie, a także składa w dniu Hackathonu
          oświadczenie o stanie zdrowia oraz że nie podlega on obowiązkowej
          kwarantannie lub izolacji w związku z pandemią wirusa SARS-CoV-2.
          Organizator nie ponosi odpowiedzialności z tego tytułu. Uczestnik
          zobowiązuje się do przestrzegania obowiązujących rozporządzeń Rady
          Ministrów związanych z pandemią COVID-19.
        </li>
        <li>
          Uczestnik ma obowiązek samodzielnie wyposażyć się w maseczkę ochronną
          zgodną z obowiązującymi rozporządzeniami Rady Ministrów związanych z
          pandemią Covid-19
        </li>
        <li>
          Uczestnik odpowiada za wyrządzone przez siebie szkody na terenie
          obiektu, gdzie odbywać się będzie Hackathon.
        </li>
        <li>
          Nazwa Drużyny nie może zawierać wulgaryzmów, treści obraźliwych,
          sloganów faszystowskich, nazistowskich, komunistycznych i innych
          zabronionych przez polskie prawo, a także wszelkiego rodzaju treści,
          które mogłyby zostać źle odebrane, w szczególności treści wzywających
          do nienawiści lub mogących urazić czyjąkolwiek godność osobistą.
        </li>
        <li>
          Uczestnicy zobowiązani są do stawienia się na miejscu wydarzenia w
          podanym terminie.
        </li>
        <li>
          Uczestnicy mają pełną dowolność wyboru technologii, w których będą
          tworzyli projekty konkursowe, jednak Organizator nie ma obowiązku
          zapewnienia żadnego dodatkowego sprzętu z tego tytułu.
        </li>
        <li>
          Dozwolone jest wcześniejsze przygotowanie koncepcji i założeń
          tworzonego oprogramowania oraz grafik, które zostaną wykorzystane w
          oprogramowaniu lub w jego prezentacji.
        </li>
        <li>
          Jeśli Uczestnicy kategorii “Robotycznej” chcą skorzystać dodatkowo z
          własnych części wymagane jest przesłanie ich listy do zatwierdzenia na
          adres e-mail Organizatora do dnia 08.01.2022. Drużyna nie może
          korzystać z części, które nie zostały zatwierdzone przez Organizatora.
        </li>
        <li>
          Projekt musi w całości (poza elementami wyszczególnionymi w paragrafie
          4, punkcie 17) powstać w czasie trwania Hackathonu.
        </li>
        <li>
          Organizator informuje, że program Hackathonu zakłada przez Uczestników
          wykonywanie czynności o dużej intensywności przez okres 24 godzin.
        </li>
      </ol>

      <RegulaminSectionHeader header="§5" />
      <RegulaminSectionHeader header="PRZEBIEG HACKATHONU" />
      <ol className={styles['regulamin_list']}>
        <li>
          Hackathon będzie przebiegał według harmonogramu udostępnionego
          Uczestnikom na początku wydarzenia. Organizator zastrzega sobie prawo
          do zmiany harmonogramu w trakcie wydarzenia. Organizator ma obowiązek
          podać do wiadomości Uczestników każdą zmianę w harmonogramie.
        </li>
        <li>
          Organizator w trakcie Hackathonu zapewni: dostęp do Internetu,
          zasilanie elektryczne, dodatkowy sprzęt dla uczestników kategorii
          „Robotycznej” (paragraf 4, punkt 9), wyżywienie oraz napoje.
          Organizator zapewnia także Uczestnikom dostęp do strefy relaksu przez
          cały czas trwania wydarzenia.
        </li>
        <li>
          Przed prezentacją końcowego rozwiązania Uczestnicy umieszczają swoje
          prezentacje w dowolnym otwartym repozytorium cyfrowym.
        </li>
      </ol>

      <RegulaminSectionHeader header="§6" />
      <RegulaminSectionHeader header="ZADANIA" />
      <ol className={styles['regulamin_list']}>
        <li>
          W ramach Hackathonu przeprowadzone zostaną niezależne od siebie
          konkursy, których przedmiotem będzie rozwiązanie zadań z kategorii
          “Klasycznej”, “Robotycznej” lub „AI”.
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
          Organizatora. Temat kategorii “Robotycznej” podany jest Uczestnikom 9
          dni przed wydarzeniem.
        </li>
        <li>
          Po rozpoczęciu Hackathonu Uczestnicy mają 24 godziny na rozwiązanie
          zadań. Uczestnik ma możliwość ukończenia zadania wcześniej niż
          wyznaczony czas.
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
          W trakcie Hackathonu, o godzinie uwzględnionej w harmonogramie
          Hackathonu, Jury zarządza preeliminacje, tzn. wstępną ocenę projektów
          zrealizowanych przez Drużyny. Jury ma prawo wykluczyć część Drużyn
          (nie więcej niż połowę biorących udział w każdej kategorii) z udziału
          w końcowej ocenie projektów. Drużyny wykluczone w preeliminacjach mają
          prawo do dalszej pracy nad projektami, jednak nie będą uwzględniane
          podczas oceny rozwiązań i nie mają możliwości zostać nagrodzone.
          Wykluczanie drużyn przez Jury podczas preeliminacji odbywa się poprzez
          wstępną ocenę prac według tych samych kryteriów, co finalna ocena
          prac.
        </li>
        <li>
          W kategorii “Klasycznej” wyróżniono następujące kryteria oceniania
          wraz z maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>
              Innowacyjność i pomysłowość zaproponowanych rozwiązań – 15 pkt.
            </li>
            <li>Stopień realizacji projektu – 20 pkt.</li>
            <li>Estetyka i wygląd projektu – 10 pkt.</li>
            <li>Potencjał rozwojowy i biznesowy projektu – 10 pkt.</li>
            <li>Zgodność z tematyką Hackathonu – 25 pkt.</li>
          </ol>
        </li>
        <li>
          W kategorii „Robotycznej” wyróżniono następujące kryteria oceniania
          wraz z maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>
              Innowacyjność i pomysłowość zaproponowanych rozwiązań – 20 pkt.
            </li>
            <li>Stopień ukończenia projektu – 20 pkt.</li>
            <li>Użytkowość i przydatność – 10 pkt.</li>
            <li>Potencjał na rozwój projektu – 10 pkt.</li>
            <li>Zgodność z tematyką Hackathonu – 25 pkt.</li>
          </ol>
        </li>
        <li>
          W kategorii “AI” wyróżniono następujące kryteria oceniania wraz z
          maksymalną liczbą punktów do uzyskania:
          <ol className={styles['regulamin_list_2nd_level']}>
            <li>Innowacyjność i pomysłowość - 20 pkt.</li>
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
          W przypadku całkowitej niezgodności rozwiązania z tematem kategorii
          "AI" Hackathonu, sekcje "Innowacyjność i pomysłowość" oraz "Potencjał
          do rozwoju, użyteczność biznesowa/naukowa/przemysłowa" oceniane są na
          0 pkt.
        </li>
        <li>
          Każdy członek Jury dokonuje indywidualnej, subiektywnej oceny
          wyceniając dany projekt na odpowiednią liczbę punktów: od 1 do
          maksymalnej liczby, przewidzianej w niniejszym Regulaminie w
          paragrafie 7 pkt. 6, 7 i 8. Ocena końcowa jest sumą punktów
          przyznanych przez każdego z członków Jury.
        </li>
        <li>
          W przypadku remisu, decyzja zostaje podjęta przez przewodniczącego
          Jury, wybranego przez członków Jury spośród nich samych przed
          rozpoczęciem Hackathonu.
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
              wzywających do nienawiści na tle rasowym, religijnym lub
              jakimkolwiek innym,
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
          Facebook i Instagram Organizatora oraz Hackathonu.
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
          rozmiaru ciała, pochodzenia etnicznego, religii, umyślne zastraszanie,
          prześladowanie i niepożądaną uwagę seksualną. Ponadto podczas
          Hackathonu zabrania się używania słów oraz symboli powszechnie
          uznanych za niedozwolone, w tym wulgaryzmów lub określeń mogących
          powodować obrazę uczuć religijnych lub światopoglądowych, oraz
          wskazujących na dyskryminację.
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
          Podczas trwania Hackathonu Uczestników obowiązuje całkowity zakaz
          spożywania alkoholu.
        </li>
        <li>
          Uczestnicy zobowiązani są w maksymalnym możliwym zakresie umożliwić
          spokojną pracę pozostałym drużynom, a w szczególności zabronione jest:
          celowe rozpraszanie pozostałych Drużyn podczas prezentacji oraz celowe
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
        <li>Niniejszy Regulamin wchodzi w życie z dniem 25.11.2021.</li>
        <li>
          Organizator w trakcie Hackathonu zapewni: dostęp do Internetu,
          zasilanie elektryczne, dodatkowy sprzęt dla uczestników kategorii
          „Robotycznej” (paragraf 4, punkt 9), wyżywienie oraz napoje.
          Organizator zapewnia także Uczestnikom dostęp do strefy relaksu przez
          cały czas trwania wydarzenia.
        </li>
        <li>
          Uczestnik podczas rejestracji Drużyny składa oświadczenie, że zapoznał
          się z niniejszym Regulaminem oraz akceptuje jest postanowienia.
        </li>
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
          Organizator ma obowiązek przekazania danych osobowych uczestników
          Państwowemu Powiatowemu Inspektorowi Sanitarnemu pełniącemu nadzór
          epidemiologiczny na terenie wydarzenia i służbom porządkowym na ich
          żądanie.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany terminu, formy lub
          odwołania wydarzenia wyłącznie z przyczyn od niego niezależnych, które
          uniemożliwiają przeprowadzenie Hackathonu w terminie oraz formie
          określonych w Regulaminie.
        </li>
        <li>
          Organizator zastrzega sobie prawo do zmiany Regulaminu z ważnych
          przyczyn. Wszelkie zmiany Regulaminu, w tym w zakresie terminów
          Konkursu zostaną niezwłocznie opublikowane na stronie internetowej
          Hackathonu. O wszelkich zmianach Regulaminu Organizator poinformuje
          również pocztą elektroniczną zarejestrowanych Uczestników. Zmiany
          wchodzą w życie z chwilą ich publikacji na oficjalnej stronie
          internetowej wydarzenia.
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
      <FooterRegulamin />
    </main>
  )
}
