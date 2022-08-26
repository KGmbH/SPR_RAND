// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Vielen Dank für Deine Teilnahme an diesem online-Leseexperiment. 
            <br />
            <br />
            Deine Antworten aus diesem Experiment werden ausschließlich zu wissenschaftlichen Zwecken aufgezeichnet und ausgewertet. Die Daten werden anonym gespeichert.            <br />
            <br />Durch Deine Teilnahme bestätigst Du, dass Du mit diesen Teilnahmebedingungen einverstanden bist.<br />
`,
    buttonText: 'Experiment beginnen',
    title: 'Willkommen!'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Aufgabenstellung',
  text: `Dieses Experiment besteht aus 14 Sätzen, gefolgt von je einer Verständnisfrage. Deine Aufgabe ist es, die Sätze zu lesen und die dazugehörige Frage zu beantworten. <br><br>Die Sätze werden nicht auf einmal eingeblendet, sondern Du kannst die Wörter einzeln mit der Leertaste anzeigen lassen. Du kannst im Satz nicht mehr zurück gehen. <br><br>
         Bitte lies Dir die Sätze aufmerksam aber in Deiner gewohnten Geschwindigkeit durch und beantworte die Fragen aufgrund Deines intuitiven Verständnisses der Situation.<br><br>
Bitte beachte, dass Sie das Experiment auf einem Computer mit Tastatur (nicht auf einem mobilen Gerät) durchführen sollten.<br>
`,
  buttonText: 'Start'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Weitere Informationen',
    text: 'Diese Angaben sind freiwillig, aber sie helfen uns bei der Analyse der Ergebnisse.<br/>Bitte klicken Sie zuletzt unbedingt unten auf "WEITER", da Ihre Daten sonst nicht gespeichert werden.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
   buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
   gender_male: 'männlich',
   gender_female: 'weiblich',
   gender_other: 'divers',
   edu_question: 'Höchster Bildungsabschluss',
   edu_graduated_high_school: 'kein Schulabschluss',
   edu_graduated_college: 'Schulabschluss',
   edu_higher_degree: 'Hochschulabschluss',
   languages_question: 'Muttersprache',
   languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
   comments_question: 'Kommentare<br />(bitte auch Ihre SONA-ID hier eintragen, wenn vorhanden!)'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Vielen Dank für Ihre Teilnahme an unserem Experiment!',
  prolificConfirmText: 'Bitte Knopf drücken'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/




const spr_test = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.spr.length,
    name: 'spr_test',
    data: _.shuffle(trial_info.spr)}, // random order
    {
	stimulus_container_generator: stimulus_container_generators.self_paced_reading,
//	stimulus_container_generator: spr_custom,
        answer_container_generator: answer_container_generators.button_choice,
        handle_response_function: handle_response_functions.self_paced_reading
    })
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale


// Create a first try-out self paced reading task (two items)
const spr_tryout = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.tryout.length,
    name: 'spr_tryout',
    data: trial_info.tryout},
    {
	stimulus_container_generator: stimulus_container_generators.self_paced_reading,
//	stimulus_container_generator: spr_custom,
        answer_container_generator: answer_container_generators.button_choice,
        handle_response_function: handle_response_functions.self_paced_reading
    })
