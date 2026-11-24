// Activity-specific guides. Keep these instructions aligned with each game's controls.
(() => {
  'use strict';
  const guides = {
    'malware-lab': {
      purpose: 'Investigate six pretend infected devices, identify the type of malware and select suitable clean-up actions.',
      steps: ['Choose a device from the help desk queue and inspect at least two clues.', 'Select the malware type that fits the evidence. Read the feedback, then tick every helpful clean-up step and leave harmful steps unticked.', 'Select Clean device. You can investigate the devices in any order; solve all six for your report. Play again starts a new attempt.'],
      learn: 'Distinguishing adware, cryptojackers, spyware, keyloggers, worms and Trojans using symptoms, downloads, programs and network clues.',
      feedback: 'Identifying malware earns up to 15 points; opening more than two clues reduces that award. A correct clean-up earns 15 points. Incorrect diagnoses lose 5 points and incorrect clean-up choices lose 3; scores stay at or above zero. All devices are simulated.',
      discussion: 'Why should you compare several clues before deciding what caused a device problem?'
    },
    'phone-security-checkup': {
      purpose: 'Explore a pretend phone and strengthen eight security settings and app choices.',
      steps: ['Open Settings or Apps on the simulated phone. Use its Back control to return to the previous phone screen.', 'Review the screen lock, app installation, device finding, updates, notifications and backup. Inspect suspicious apps and choose suitable actions.', 'Use the fixed-items list to track your progress. Complete all eight improvements to see the security report; Play again resets the phone.'],
      learn: 'Reviewing device settings, limiting risky app access, protecting login codes and planning for a lost phone.',
      feedback: 'Each new improvement earns 15 points and raises the security meter. Unsafe choices lose 5 points, with a minimum of zero. These controls change only the pretend phone, not your own device.',
      discussion: 'Which settings help prevent a problem, and which help you recover afterwards?'
    },
    'account-rescue': {
      purpose: 'Help a fictional account owner recognise a takeover, recover access and strengthen account security.',
      steps: ['Classify each of the six alerts as a warning sign or normal activity.', 'Choose the six useful recovery steps in a sensible order. Read feedback if a step is premature or is a trap.', 'Complete the four security settings to receive the rescue report. Play again restarts all three parts.'],
      learn: 'Recognising unexpected sign-ins and recovery changes, ending unwanted sessions, securing recovery options and reviewing connected apps.',
      feedback: 'Correct alert classifications earn 5 points, recovery steps earn 10, and security improvements earn 10. Incorrect choices deduct points without taking the score below zero. No real accounts or credentials are used.',
      discussion: 'Why might changing a password be only one part of recovering an account?'
    },
    'hotspot-hunter': {
      purpose: 'Practise choosing networks in public places and improving a fictional home router configuration.',
      steps: ['Read the network sign at each of three locations and compare the available connection choices.', 'Complete four true-or-false VPN questions, reading the explanation for each.', 'Choose safer values for all six home-router settings. Finish for a report, or use Play again for a fresh attempt.'],
      learn: 'Spotting lookalike hotspot names, questioning unexpected login requests and comparing network settings.',
      feedback: 'Suitable network choices earn 15 points, VPN answers earn 5, and router improvements earn 10. Mistakes deduct points, with the score never falling below zero. The router and networks are simulations; no real network settings change.',
      discussion: 'How could you confirm a public network name before connecting?'
    },
    'cyber-shield-challenge': {
      purpose: 'Bring cyber security vocabulary and decision-making together in a collaborative classroom challenge.',
      steps: ['Work alone or with a team of three or four. Enter a made-up team name and select Start the mission.', 'Match each of ten terms to its meaning by selecting a term and then a definition.', 'For each of eight cases, choose the matching term and the appropriate action. Both correct choices advance the case. Complete them all for a team certificate; Play again restarts.'],
      learn: 'Connecting security concepts to scenarios about malware, phones, accounts, networks and responsible digital decisions.',
      feedback: 'Each term match earns 5 points. Each correct case term and action earns 10 points. Incorrect matches lose 2 points and incorrect case choices lose 3, with a minimum score of zero.',
      discussion: 'Which clues helped your team agree on the safest action in a case?'
    },
    'inbox-inspector': {
      purpose: 'Inspect a pretend inbox and decide which messages are trustworthy and which are phishing attempts.',
      steps: ['Select an email from the list. Use Inspect sender to reveal the full address, and inspect the link destination and any attachment name.', 'Choose Trust, Report phishing or Delete. Read the explanation before selecting another email.', 'Judge all eight emails to see your result. You can revisit completed emails to read their explanations; Play again starts a fresh attempt.'],
      learn: 'Checking real addresses instead of display names, recognising lookalike domains, and spotting urgency, unexpected files and targeted scams.',
      feedback: 'Correct trust or report decisions earn 10 points. Deleting phishing earns 5 points; incorrect decisions lose points, with the score never falling below zero. The progress counter tracks judged emails.',
      discussion: 'Why can an email that knows your name or interests still be a scam?'
    },
    'phone-trap': {
      purpose: 'Recognise phishing delivered through text messages, voice calls and QR codes, and practise checking through a trusted route.',
      steps: ['Read the situation on the pretend phone and compare the response choices.', 'Choose a response, read the explanation, then select Next. Some situations are ordinary messages rather than scams.', 'Work through all six situations and select Finish to see your result. Play again resets the activity.'],
      learn: 'Understanding smishing, vishing and quishing; protecting verification codes; and independently checking surprising requests.',
      feedback: 'The safest response earns 10 points, a less suitable response earns 3, and a dangerous response loses 5. The score stays at or above zero. Feedback highlights the safest choice.',
      discussion: 'If someone claims to be family on a new number, how could you check their identity separately?'
    },
    'file-inspector': {
      purpose: 'Look beyond file icons and names to decide how to handle unfamiliar downloads.',
      steps: ['Turn on Show file extensions and Show details, then select a file in the pretend Downloads folder.', 'Read its full name, file type and source. Choose Safe to open, Danger: delete it, or Do not open: ask an adult.', 'Read the explanation and inspect another file. Complete all eight files for a result, or revisit an inspected file to review its explanation.'],
      learn: 'Recognising double extensions, programs disguised as documents, macro-enabled files and untrusted download sources.',
      feedback: 'The expected decision earns 10 points. Asking an adult about a dangerous file earns 6; an incorrect decision loses 5, with a minimum score of zero. These buttons only classify pretend files; they do not open or delete real files.',
      discussion: 'Why might a file ending in .jpg.exe be different from a photo ending in .jpg?'
    },
    'firewall-gatekeeper': {
      purpose: 'Set rules for a pretend school firewall so useful traffic can enter while unnecessary access is blocked.',
      steps: ['Read the six service descriptions and choose ALLOW or BLOCK for each numbered port.', 'Select Send the next wave and watch the visitors and attacks. Wait for the wave to finish before changing rules.', 'Review the four counters, adjust your rules and send the second wave. The final report shows the second-wave results and your cumulative score.'],
      learn: 'Thinking of ports as service entrances, limiting access to what is needed, and balancing protection with availability.',
      feedback: 'Each wave contains 14 randomly selected traffic examples. Serving a visitor earns 3 points and stopping an attack earns 5; blocking a visitor loses 2 and admitting an attack loses 6. These simplified rules apply to the school scenario, not every real network.',
      discussion: 'Why is blocking every connection not a useful firewall plan?'
    },
    'ransomware-outbreak': {
      purpose: 'Explore how preparation, containment and recovery affect a simulated ransomware attack on a school.',
      steps: ['Choose exactly three defences from offline backups, updates, email filtering, network zones and staff training.', 'Start the attack and watch the network and event log. If it gets through, read the pretend ransom note and select What should the school do?', 'Choose four appropriate recovery actions if you selected a backup, or three if you did not. Without a backup, restoring files is unavailable. Review the final report. If your defences stop both entry routes, the activity goes straight to the result.'],
      learn: 'Distinguishing prevention from recovery, limiting spread between network areas, and understanding the role of offline backups.',
      feedback: 'Correct recovery actions earn 10 points; incorrect ones lose 5. The final score also adds 5 points per computer whose files are saved. The model uses 12 computers and does not run real malware or encrypt real files.',
      discussion: 'Why might a backup still matter even when a school uses updates and email filtering?'
    },
    'incident-room': {
      purpose: 'Work through a coordinated response to a pretend phishing incident at Sunrise School.',
      steps: ['Assign the suggested team roles, read the event and discuss the response choices.', 'Select the required number of good actions for the current phase. Read feedback and the incident log; correct actions unlock the next phase.', 'Move through Detect, Contain, Communicate, Recover and Learn. Close the incident, then close the result overlay to review or print the report below.'],
      learn: 'Gathering facts, limiting damage, communicating calmly, securing affected accounts and learning from an incident without blaming the reporter.',
      feedback: 'Each good action earns 10 points and each mistake loses 5, with a minimum score of zero. The report records your team’s choices across the five phases.',
      discussion: 'How can a calm, supportive response encourage someone to report a mistake quickly?'
    },
    'my-balanced-day': {
      purpose: 'Plan an afternoon that makes room for learning, movement, family time and rest, alongside sensible screen use.',
      steps: ['Select an activity from the choices, then select a time box to place it in your day.', 'Fill all six time boxes. Select a different activity and a filled box to change your plan.', 'Choose Check my day, read the suggestions, and adjust your plan. Start again clears the planner.'],
      learn: 'Planning a routine, balancing different activities, and thinking about screen use before bedtime.',
      feedback: 'The balance meter responds to your choices and gives suggestions. It is a practice guide, not a personalised daily schedule.',
      discussion: 'Which part of your plan gives your eyes and body a break?'
    },
    'pop-up-safety-simulator': {
      purpose: 'Practise responding safely to unexpected pop-ups, app requests and offers to buy things.',
      steps: ['Choose Level 1: Pop-ups or Level 2: Apps and buying.', 'Read the pretend screen and select Tap it, Stop and ask a grown-up, or It is fine, keep going.', 'Read the explanation and select Next. Skip task moves ahead without earning a star; Play again returns to the level choices.'],
      learn: 'Recognising pressure, protecting personal information, and asking a trusted adult before downloads, purchases or permission changes.',
      feedback: 'Each level has eight situations. The best answer earns a star. Asking a grown-up about a harmless situation is safe, but does not always earn a star.',
      discussion: 'What would make you stop and ask for help on a real screen?'
    },
    'smart-tech-habits-quiz': {
      purpose: 'Check your understanding of healthy screen habits and everyday online safety.',
      steps: ['Read the question and choose one of the two answers.', 'Read the feedback, then select Next question. Use Skip question if you want to move on without answering.', 'Finish the ten questions to see your score. Play again starts a fresh attempt.'],
      learn: 'Screen breaks, posture, device-free moments, balanced routines, privacy and getting help.',
      feedback: 'A correct answer earns one point. A skipped question earns no points and remains part of the ten-question total.',
      discussion: 'Which habit from the quiz could you practise today?'
    },
    'info-sorter': {
      purpose: 'Distinguish information that is safe to share from information that needs adult guidance or should stay private.',
      steps: ['Select Start and read the information card.', 'Choose Green: safe to share, Yellow: ask a grown-up first, or Red: never share online.', 'Read the explanation and choose Next. Skip question moves on without a star. Play again starts over after the results.'],
      learn: 'Recognising personal information and explaining why some details can identify or locate a person.',
      feedback: 'There are twelve cards. Each correct choice earns a star; feedback explains the safest category for that example.',
      discussion: 'Why might a school uniform reveal more than a favourite colour?'
    },
    'share-circles': {
      purpose: 'Think about who is asking for information before deciding whether to share it.',
      steps: ['Select Start and read who is asking and what they want to know.', 'Choose the sharing response you think is safest.', 'Read the explanation, then choose Next or use Skip question before answering. Play again resets the activity.'],
      learn: 'Considering the audience, setting boundaries, and asking an adult when a sharing request feels uncertain.',
      feedback: 'Ten situations award stars for correct choices. Skipping adds no stars. Use the explanations to understand the decision, not just the score.',
      discussion: 'Would your answer change if the same question came from someone you only know online?'
    },
    'safe-username-maker': {
      purpose: 'Create a pretend username that is friendly and does not reveal personal details.',
      steps: ['Type a made-up username, or choose Give me an idea.', 'Read the checks and edit anything marked as a problem.', 'Complete the four self-check boxes about names, birthdays, places and kindness. Clear lets you start again.'],
      learn: 'Keeping identifying details out of an online name and checking your own choices.',
      feedback: 'The checker looks for simple patterns such as common names, birth years and long numbers. It cannot recognise every personal detail, so the self-checks matter. There is no quiz score.',
      discussion: 'How can a username show your interests without telling strangers who you are?'
    },
    'password-lab': {
      purpose: 'Explore how length and a mixture of made-up words, numbers and symbols affect a practice password.',
      steps: ['In Build a password, select tiles and watch the strength meter and tips. Remove last tile or Start again changes your creation.', 'Try the risky tiles to see why predictable words and personal information cause problems.', 'Open Weak or strong? for an eight-question quiz. Answer and select Next, or Skip question. Play again starts a new quiz.'],
      learn: 'Recognising predictable passwords and explaining why longer, less predictable combinations are stronger.',
      feedback: 'The builder uses a simplified strength rule. The quiz awards one point per correct answer and none for skips. Use made-up examples only, never a real password.',
      discussion: 'What makes a long combination harder to guess than a name and birth year?'
    },
    'account-guard': {
      purpose: 'Practise the choices that protect an account on shared devices and in everyday conversations.',
      steps: ['Select Start and read the account situation.', 'Choose a response, then read why it is safe or what you should do differently.', 'Select Next to continue, or Skip question before answering. Play again restarts after the results.'],
      learn: 'Logging out, locking screens, keeping passwords secret and seeking help when an account may be at risk.',
      feedback: 'Ten cards award one star for each correct answer. Skips add no stars.',
      discussion: 'What should you do before leaving a school computer?'
    },
    'photo-clue-detective': {
      purpose: 'Spot small details in a picture that could reveal someone’s identity, location or private information.',
      steps: ['Look around the drawing and select objects that might be private clues.', 'Read the explanation for each object. Find all five clues to unlock Next scene.', 'Use Skip scene to move on without finding everything. Skipping the final scene ends the activity; Restart brings back the first scene.'],
      learn: 'Looking beyond the main subject of a photo and considering what is visible in the background.',
      feedback: 'The clue counter shows how many private details you have found in the current scene. Ordinary objects also have explanations. There are two scenes.',
      discussion: 'What would you cover, crop out or avoid photographing before sharing a picture?'
    },
    'post-or-pause': {
      purpose: 'Consider privacy, consent and kindness before putting something online.',
      steps: ['Select Start and read the idea for a post.', 'Choose whether to post with the appropriate permission or pause.', 'Read the explanation and select Next. Skip question moves ahead without a star, and Play again starts another attempt.'],
      learn: 'Recognising digital footprints, respecting other people’s photos, and pausing before angry or personal posts.',
      feedback: 'Ten examples award stars for correct decisions. The explanations help you connect each decision to its possible consequences.',
      discussion: 'How could a post affect someone else, even if you meant it as a joke?'
    },
    'privacy-champion-quiz': {
      purpose: 'Bring together what you have learned about private information, sharing, usernames and account safety.',
      steps: ['Select Start and choose an answer to each question.', 'Read the feedback before selecting Next. Skip question lets you move ahead without points.', 'Finish all twelve questions to see your result, then choose Play again if you want another attempt.'],
      learn: 'Applying privacy rules across messages, photos, passwords, shared computers and online identities.',
      feedback: 'Correct answers earn stars. Skipped questions remain in the twelve-question total and earn no stars.',
      discussion: 'Which privacy rule would you explain to a younger learner?'
    },
    'cool-it-down': {
      purpose: 'Explore how a reply can calm an online disagreement or make it more heated.',
      steps: ['Read the argument and the latest chat message.', 'Select a reply and watch the conversation and temperature change.', 'Continue through the replies. Try again repeats the argument; Next argument switches to another situation.'],
      learn: 'Managing emotions, choosing respectful language, and finding ways to reduce conflict.',
      feedback: 'The thermometer reflects the choices in this pretend conversation. Aim to bring it down to COOL. It is a learning model, not a prediction of how everyone will react.',
      discussion: 'Which words helped calm the situation, and why?'
    },
    'message-makeover-studio': {
      purpose: 'Rewrite messages so that they communicate clearly and kindly.',
      steps: ['Read the original message and type your own version, or select Start from the old message to edit it.', 'Try the feeling buttons, read the tone tips, and compare the chat preview with your intention.', 'Read your message aloud to a partner. Next challenge moves to another example; Clear empties your draft.'],
      learn: 'Considering tone, capital letters, punctuation, word choice and the feelings of the reader.',
      feedback: 'The tone meter uses simple word and punctuation checks. It is a helper, not a judge of meaning. There are six challenges that cycle when you choose Next challenge.',
      discussion: 'Could a reader understand your message differently from how you intended it?'
    },
    'group-chat-sandbox': {
      purpose: 'Practise keeping a pretend team conversation kind, helpful and inclusive.',
      steps: ['Wait for the first team message, then read the situation and coach tip.', 'Type your reply and select Send or press Enter. Wait for the chat response before replying again.', 'Follow the conversation and mood meter. If a reply misses the problem, use the feedback to try another response.'],
      learn: 'Including people who feel left out, responding to disagreement, and noticing how language changes a group conversation.',
      feedback: 'The mood and coach feedback use simple word checks. Discuss your wording with a partner as well; the meter cannot fully understand tone or context.',
      discussion: 'How could you help someone feel welcome without making another person feel blamed?'
    },
    'sort-it-board': {
      purpose: 'Compare jokes, conflicts and bullying by looking at intention, repetition and differences in power.',
      steps: ['Read a situation card and select it.', 'Select the Joke, Conflict or Bullying column to place the card. You can select and move cards again.', 'Place every card, then choose Check my board. Read the explanations and revise your choices, or select Start again.'],
      learn: 'Recognising when everyone is enjoying a joke, when people disagree, and when repeated hurtful behaviour needs help.',
      feedback: 'The result counts correct placements and marks cards with explanations. Every card must be placed before the board can be checked.',
      discussion: 'What makes a joke stop being funny for the person it is about?'
    },
    'red-flag-detective': {
      purpose: 'Find warning signs in pretend messages before following a link, replying or sharing information.',
      steps: ['Read the message, including its sender and any link text.', 'Select suspicious phrases and read why they are warning signs. Other selectable details explain why they are not red flags.', 'Find every red flag to reveal Next message, or choose Skip message. The three examples cycle back to the first.'],
      learn: 'Spotting pressure, suspicious senders, password requests, secrecy and offers that are too good to be true.',
      feedback: 'The counter tracks unique red flags found in the current message. Skipping does not count unfound clues as found.',
      discussion: 'Why might a scammer want you to hurry or keep a message secret?'
    },
    'encryption-machine': {
      purpose: 'See how a key can turn a readable message into coded letters.',
      steps: ['Enter a short made-up message and choose a key from 1 to 5.', 'Select Lock it slowly to follow each letter on the alphabet strip, or Lock it fast to see the result immediately.', 'Let the run finish, then change the message or key and compare the code. After Z, the alphabet wraps around to A.'],
      learn: 'The roles of a message, a key and a coded result, using a simple letter-shift demonstration.',
      feedback: 'Blue marks the input letter, yellow shows the steps and green marks the code letter. This simple cipher is for learning; it is not secure real-world encryption.',
      discussion: 'What changes when the same message is locked with a different key?'
    },
    'decoder-machine': {
      purpose: 'Reverse a simple letter shift to turn a coded message back into readable words.',
      steps: ['In Watch it decode, enter a code, choose the number of steps back, and select Unlock it.', 'In Decode the messages, use each supplied key, type your answer and select Check.', 'In No key? Try them all, compare the possible decodings and choose the line that makes sense.'],
      learn: 'Decoding with a key, wrapping around the alphabet, and testing possible keys systematically.',
      feedback: 'The animation shows each backward step, and the exercises check your answers. Trying only five possible keys illustrates why this teaching cipher is easy to break.',
      discussion: 'Why is a message harder to protect when there are only a few possible keys?'
    },
    'cyber-castle': {
      purpose: 'Discover how different protections defend different parts of a digital life.',
      steps: ['Choose defences within the coin budget. Each defence costs one coin; select it again to remove it.', 'Select Send the attacks! and read which threats were stopped and which got through.', 'After the results, choose Start again to try the next round with a different budget and revise your defences.'],
      learn: 'Matching a protection to a threat and combining several protections rather than relying on just one.',
      feedback: 'Round one provides three coins and round two provides five. The results show how many of five attacks were stopped.',
      discussion: 'Which defence would you add first if you had one extra coin?'
    },
    'virus-outbreak': {
      purpose: 'Compare how protective habits affect a simulated computer-virus outbreak.',
      steps: ['Choose whether updates, antivirus, careful file handling and backups are in place.', 'Select Start the outbreak and watch six rounds across the 24 pretend computers.', 'Compare the results in the history table. Change protections and run again; Reset computers stops the current run and clears the computer display.'],
      learn: 'Reducing the spread of harmful software and understanding that backups help recover files.',
      feedback: 'Spread includes randomness, so repeat runs can differ. Only completed runs enter the comparison table. This simulation does not run a real virus.',
      discussion: 'How is preventing an infection different from recovering files after one?'
    },
    'url-detective': {
      purpose: 'Look closely at web addresses and distinguish real sites from lookalike names.',
      steps: ['Select the part of the displayed address that names the actual website.', 'Once you find it, choose Real site or Fake lookalike and read the explanation.', 'Select Next address or use Skip address. After the nine addresses, use the checklist options and your own rule to make a printable checklist.'],
      learn: 'Reading the website name carefully, noticing spelling tricks, and understanding that a padlock alone does not prove a site is honest.',
      feedback: 'A correct real-or-fake judgement earns one point. Skipped addresses earn none. The examples are pretend practice addresses.',
      discussion: 'How can a familiar name appear inside an address that belongs to someone else?'
    },
    'beat-the-trickster': {
      purpose: 'Recognise attempts to gain trust, create urgency or tempt someone into giving away access.',
      steps: ['Choose one of the four stories.', 'Read each message and select a response. Some choices lead to another message before the outcome.', 'Read the explanation at the end. Select a story again to try a different response or move to another story.'],
      learn: 'Recognising impersonation, fake helpers, tempting offers and attempts to bypass access rules.',
      feedback: 'The power meter changes with your decisions. The header counts stories in which you have beaten the trickster; replaying a story can change its recorded outcome.',
      discussion: 'How could you check a surprising request through a separate, trusted route?'
    },
    'app-permission-checker': {
      purpose: 'Decide whether an app needs the information or device features it asks to access.',
      steps: ['Choose an app on the pretend phone and read what it does.', 'Answer every permission request. Location choices include allowing it all the time, only while using the app, or denying it.', 'Select Check this app. Read the reasons, revise your choices and inspect the data leak meter before checking another app.'],
      learn: 'Matching permissions to an app’s purpose and limiting unnecessary access.',
      feedback: 'Five apps can be checked. The meter summarises unnecessary permissions across checked apps. Denying everything is not always the best answer: some features need access to work.',
      discussion: 'Why might Maps need your location while a torch app does not?'
    },
    'password-cracker': {
      purpose: 'Explore why predictable passwords are easy to guess and why length affects guessing effort.',
      steps: ['Type a pretend password that you do not use for any real account.', 'Choose Word list attack or Try every combination and watch the simulated output.', 'Read the result and comparison table. Try a different made-up example and compare what changes.'],
      learn: 'The difference between trying common guesses and exploring combinations, and the value of less predictable passwords.',
      feedback: 'This is a classroom simulation. The time estimates use a simplified guessing-rate assumption and are not guarantees about the security of real accounts.',
      discussion: 'Why can a long but very predictable phrase still be a poor choice?'
    },
    'two-step-login': {
      purpose: 'Explore how a second verification step can protect an account when someone knows its password.',
      steps: ['Choose Play the hacker or Play Ali (the owner), and use the pretend login details provided in the activity.', 'Compare a login with Two-step login switched off and on.', 'When a code is requested, consider who can see Ali’s phone. Check the code, read the login record and use Try again to repeat.'],
      learn: 'Distinguishing a password from possession of a second factor and keeping verification codes private.',
      feedback: 'The login record shows the outcomes of your attempts. The phone, account and code are simulations; no real account is accessed.',
      discussion: 'Why should you keep a login code secret even if someone already knows your password?'
    },
    'network-explorer': {
      purpose: 'Follow a message through a network and compare readable packets with a simplified encrypted version.',
      steps: ['Type a made-up message and choose Open cafe Wi-Fi (no lock) or Encrypted (padlock).', 'Select Send it and watch the numbered packets travel.', 'Compare the snooper’s view with the website’s reconstructed message. Wait for completion, switch modes and send again.'],
      learn: 'Breaking messages into packets, rebuilding them in order, and protecting their contents with encryption.',
      feedback: 'Packets may arrive out of order. Their numbers let the receiver rebuild the message. The scrambled letters illustrate encryption; this is not a real network-security test.',
      discussion: 'How can the receiver rebuild a message when its parts arrive in a different order?'
    },
    'photo-edit-lab': {
      purpose: 'Explore how changing a picture or its headline can change the story it appears to tell.',
      steps: ['Use the editing controls to change the illustrated scene and add a pretend headline.', 'Hold to see the original and compare your changes. Show or hide the edit list to help a partner spot them.', 'Try the partner challenge of making three edits, then use Start again to restore the scene.'],
      learn: 'Questioning visual evidence, noticing editing clues and checking a picture’s source and context.',
      feedback: 'There is no quiz score. The original view and edit list help you compare the changes; the on-page checklist suggests ways to check pictures.',
      discussion: 'Could an unchanged picture become misleading if someone adds a different headline?'
    },
    'rumour-spread-simulator': {
      purpose: 'See how sharing a story can spread information quickly, and practise checking it first.',
      steps: ['Read the story and its source. Choose Share it now or Check first.', 'After checking, decide whether to share. Watch the network and read the outcome before choosing Next story.', 'Skip story moves on without credit. It is unavailable while a sharing animation runs. Finish five stories to see your results.'],
      learn: 'Checking sources, separating true stories from rumours, and considering the effect of passing information on.',
      feedback: 'Results count fake stories stopped, true stories shared and people reached by shared fakes. Skips add no credit, and spread includes randomness.',
      discussion: 'What could you check before passing on an exciting or worrying message?'
    },
    'cyber-crime-scene': {
      purpose: 'Use evidence to work out how a pretend account was compromised and how it could have been protected.',
      steps: ['Select the six clues in the order you think they happened, then choose Check my timeline. Clear timeline lets you rebuild it.', 'Once the timeline is correct, decide how the hacker got in.', 'Choose all the protections that would have helped and select Close the case. Correct choices unlock a printable case report.'],
      learn: 'Ordering evidence, identifying phishing and linking preventative actions to the events in a case.',
      feedback: 'Later stages unlock as you solve earlier ones. Feedback highlights timeline and protection choices that need another look.',
      discussion: 'Which early action could have interrupted the chain of events?'
    },
    'cyber-defence-hq': {
      purpose: 'Plan a set of protections for a pretend school while working within a limited budget.',
      steps: ['Choose defences within the initial 12-point budget and read what each one protects against.', 'Launch the attack wave, wait for the log to finish, and inspect the attacks that got through.', 'If offered, get five more points and improve the plan before trying again. Make our defence plan creates a plan from your choices.'],
      learn: 'Prioritising risks, matching defences to threats and improving a plan using the results of a simulation.',
      feedback: 'Each wave tests nine attacks and reports how many were blocked. Defences have different costs, so use the results to decide where to spend your points.',
      discussion: 'How would you explain your spending choices to the school?'
    }
  };

  const trigger = document.querySelector('.activity-description-trigger');
  const guide = guides[document.body.dataset.activity];
  if (!trigger || !guide) return;
  const dialog = document.createElement('dialog');
  dialog.id = 'activity-description-dialog';
  dialog.className = 'activity-description-dialog';
  dialog.setAttribute('aria-labelledby', 'activity-description-title');
  // Use text nodes for guide content so descriptions are never treated as markup.
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  const top = make('div', 'description-heading');
  const titleGroup = make('div');
  titleGroup.append(make('p', 'description-eyebrow', `Grade ${document.body.dataset.grade} · Activity guide`));
  const title = make('h2', '', document.title);
  title.id = 'activity-description-title';
  titleGroup.append(title);
  const close = make('button', 'activity-description-close', 'Close');
  close.type = 'button';
  close.autofocus = true;
  close.setAttribute('aria-label', 'Close description');
  close.addEventListener('click', () => dialog.close());
  top.append(titleGroup, close);
  const content = make('div', 'description-content');
  content.tabIndex = 0;
  content.setAttribute('role', 'region');
  content.setAttribute('aria-label', 'Activity description details');
  function section(heading, text) {
    const section = make('section', 'description-section');
    section.append(make('h3', '', heading), make('p', '', text));
    content.append(section);
  }
  section('Purpose', guide.purpose);
  const instructions = make('section', 'description-section');
  const steps = make('ol');
  guide.steps.forEach(step => steps.append(make('li', '', step)));
  instructions.append(make('h3', '', 'How to use this activity'), steps);
  content.append(instructions);
  section('What you will practise', guide.learn);
  section('Feedback and progress', guide.feedback);
  section('Talk about it', guide.discussion);
  content.append(make('p', 'description-note', 'Use made-up information in these practice activities. Your answers are not saved or sent. Closing this description keeps your current activity open; any animation already running will continue.'));
  dialog.append(top, content);
  document.body.append(dialog);
  trigger.addEventListener('click', () => {
    dialog.showModal();
    content.scrollTop = 0;
    document.body.classList.add('activity-description-open');
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('activity-description-open');
    trigger.focus();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
