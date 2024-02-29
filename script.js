(function() {

    const words = {
        "accommodate": "The hotel can accommodate up to 500 guests.",
        "accompany": "Children must accompany by an adult.",
        "according": "According to the weather forecast, it will rain tomorrow.",
        "achieve": "With hard work, you can achieve your goals.",
        "actionable": "The report provided actionable insights for the team.",
        "admirable": "His dedication to the cause is admirable.",
        "admiration": "She has earned the admiration of her peers.",
        "adorable": "The puppy's adorable antics made everyone smile.",
        "advice": "Always seek advice from someone you trust.",
        "advise": "I would advise caution when dealing with strangers.",
        "affect": "The weather can greatly affect your mood.",
        "aggressive": "The company adopted an aggressive marketing strategy.",
        "aisle": "She walked down the aisle on her wedding day.",
        "allowed": "Pets are not allowed in the hotel.",
        "aloud": "She read the letter aloud to the family.",
        "altar": "The couple stood before the altar to exchange vows.",
        "alter": "She decided to alter her wedding dress.",
        "although": "Although it was raining, they decided to go for a walk.",
        "amateur": "He is an amateur painter, but his work is quite good.",
        "ambitious": "The project was ambitious but successful.",
        "ancient": "The museum houses ancient artifacts from Egypt.",
        "answer": "She knew the answer to the teacher's question.",
        "apologise": "I must apologise for my earlier mistake.",
        "apology": "He offered an apology for his late arrival.",
        "apparent": "It became apparent that we had taken the wrong route.",
        "applicable": "These rules are not applicable in every situation.",
        "application": "The job application process can be quite lengthy.",
        "appreciate": "I really appreciate your help with this project.",
        "artificial": "The room was lit by artificial light.",
        "assistance": "Thank you for your assistance with the project.",
        "assistant": "The assistant manager will handle your request.",
        "attached": "Please find the document attached to this email.",
        "available": "Tickets are available online and at the box office.",
        "average": "His performance was above average.",
        "awkward": "The silence that followed was incredibly awkward.",
        "bargain": "She found a great bargain at the local thrift store.",
        "beneficial": "Regular exercise is beneficial to your health.",
        "bicycles": "The city has a new lane dedicated to bicycles.",
        "borough": "She lives in the Brooklyn borough of New York City.",
        "brought": "He brought his camera to the event.",
        "bruise": "She had a large bruise on her leg after the fall.",
        "category": "This question falls into the category of ethics.",
        "cautious": "Be cautious when walking alone at night.",
        "cemetery": "The old cemetery is said to be haunted.",
        "cereal": "Cereal is a common breakfast food.",
        "change": "Change can be difficult, but it's often necessary.",
        "changeable": "The weather here is quite changeable.",
        "charge": "The restaurant will charge a fee for delivery.",
        "chargeable": "Extra services are chargeable at the hotel.",
        "chef": "The chef prepared a four-course meal for the guests.",
        "chemist": "The chemist is working on a new formula.",
        "climb": "They plan to climb the mountain early tomorrow.",
        "colleague": "My colleague will handle your request.",
        "collision": "The collision between the two cars caused a lot of traffic.",
        "comfortable": "Make sure you wear comfortable shoes for the hike.",
        "committee": "The committee will review the proposal tomorrow.",
        "communicate": "Effective leaders communicate clearly and concisely.",
        "community": "The community center offers various programs for residents.",
        "competition": "The competition was fierce, but she won first place.",
        "complements": "The wine complements the cheese perfectly.",
        "complete": "He managed to complete the task on time.",
        "completion": "Upon completion of the project, the team celebrated.",
        "compliment": "He received a compliment on his presentation.",
        "confidence": "Public confidence in the government has waned.",
        "confident": "She's confident that the plan will succeed.",
        "confidential": "This document is confidential and should not be shared.",
        "conscience": "He acted according to his conscience, despite the risks.",
        "conscious": "She was very conscious of her impact on the environment.",
        "considerable": "The project required a considerable amount of time.",
        "consideration": "Take all factors into consideration before making a decision.",
        "controversy": "The new policy sparked a lot of controversy.",
        "convenience": "For your convenience, we offer online booking.",
        "correspond": "Her account does not correspond with the witness's statement.",
        "cough": "He has a persistent cough that won't go away.",
        "could": "I could see the disappointment in his eyes.",
        "couldn't": "She couldn't believe her luck when she found a $20 bill on the ground.",
        "criticise": "It's easy to criticise, but harder to offer solutions.",
        "crucial": "Making informed decisions is crucial for success.",
        "crystal": "The crystal vase sparkled in the sunlight.",
        "curiosity": "His curiosity led him to explore new topics.",
        "debt": "She worked two jobs to pay off her student debt.",
        "decency": "The movie lacks the decency expected by the audience.",
        "decent": "He's a decent person who always tries to do the right thing.",
        "decrease": "We've seen a decrease in the number of new cases.",
        "deep": "The water in this part of the lake is very deep.",
        "deepen": "The crisis has served to deepen the country's economic difficulties.",
        "definite": "We need a definite answer by tomorrow.",
        "defrost": "Remember to defrost the chicken before cooking.",
        "defuse": "The negotiator was able to defuse the situation.",
        "delicious": "The homemade cake was absolutely delicious.",
        "dependable": "The old truck was still dependable after all these years.",
        "descent": "The plane began its descent towards the airport.",
        "desert": "The camel is well adapted to life in the desert.",
        "desperate": "In desperate need of assistance, she called for help.",
        "dessert": "For dessert, we had apple pie and ice cream.",
        "determined": "She was determined to finish the marathon.",
        "develop": "They plan to develop the vacant lot into a shopping center.",
        "device": "The device can be controlled remotely.",
        "devise": "They need to devise a plan to solve the issue.",
        "dictionary": "Use a dictionary to improve your vocabulary.",
        "disappear": "The magician made the rabbit disappear.",
        "disastrous": "The picnic was disastrous due to the unexpected storm.",
        "dissent": "There was considerable dissent among the members of the committee.",
        "doubt": "There was no doubt in her mind about the decision.",
        "draft": "He completed the first draft of his novel.",
        "draught": "A cold draught came through the crack in the window.",
        "effect": "The new law will take effect next month.",
        "Egypt": "The pyramids are one of Egypt's most famous landmarks.",
        "embarrass": "He was embarrassed by his mistake.",
        "enjoyable": "The concert was very enjoyable.",
        "enough": "There was not enough time to finish the exam.",
        "environment": "We must take action to protect the environment.",
        "equip": "The new lab was equipped with the latest technology.",
        "equipment": "Safety equipment is mandatory on the construction site.",
        "equipped": "The apartment is fully equipped for your stay.",
        "especially": "He loves all fruits, especially mangoes.",
        "essential": "Water is essential for life.",
        "evidence": "There was not enough evidence to convict him.",
        "exaggerate": "He tends to exaggerate his accomplishments.",
        "excellent": "She received excellent grades this term.",
        "existence": "The existence of extraterrestrial life is still debated.",
        "expectancy": "Life expectancy has increased over the last century.",
        "explanation": "He owed her an explanation for his behavior.",
        "facial": "She booked a facial treatment at the spa.",
        "familiar": "She became familiar with the city in just a few days.",
        "famous": "The artist became famous for his unique style.",
        "farther": "He threw the ball farther than anyone else.",
        "father": "Her father gave her a supportive hug.",
        "fictitious": "The characters in the novel are entirely fictitious.",
        "foreign": "Learning a foreign language can be challenging.",
        "forty": "She was forty today.",
        "fought": "The soldiers fought bravely in the battle.",
        "frequently": "He frequently visits the gym.",
        "friction": "Friction between the two surfaces causes heat.",
        "government": "The government introduced a new education policy.",
        "gravity": "Gravity keeps us grounded on the Earth.",
        "guarantee": "The store offers a money-back guarantee.",
        "guessed": "I guessed the answer to the riddle.",
        "guest": "We have a guest staying with us this weekend.",
        "harass": "The company has a strict policy against harassment.",
        "heard": "I heard a strange noise outside.",
        "herd": "A herd of cattle was grazing in the field.",
        "hesitant": "She was hesitant to make the decision without more information.",
        "hindrance": "Lack of funding was a major hindrance to the project.",
        "horrible": "The news reported a horrible accident on the freeway.",
        "horribly": "The play was horribly executed.",
        "hymns": "The choir sang hymns during the service.",
        "identity": "Theft of personal identity is a serious crime.",
        "immediate": "There was an immediate improvement in her mood.",
        "immediately": "The problem needs to be addressed immediately.",
        "incredibly": "The dessert was incredibly delicious.",
        "independence": "The country celebrated 50 years of independence.",
        "individual": "Each individual has their own unique talents.",
        "infectious": "His laughter was infectious, making everyone smile.",
        "influential": "She is one of the most influential figures in the industry.",
        "innocence": "The evidence clearly proved his innocence.",
        "innocent": "The jury found the defendant innocent of the charges.",
        "interfere": "Please do not interfere with the investigation.",
        "interrupt": "Please do not interrupt while someone else is speaking.",
        "island": "They spent a week on a tropical island.",
        "isle": "The isle is known for its stunning beaches.",
        "knife": "She used a sharp knife to chop the vegetables.",
        "knob": "Turn the knob to the right to open the door.",
        "lamb": "The lamb frolicked in the meadow.",
        "language": "She speaks several languages fluently.",
        "lead": "They found lead in the old pipes.",
        "led": "She led the team to a victory.",
        "leisure": "He enjoys reading at his leisure.",
        "length": "The length of the table is 2 meters.",
        "lengthen": "The days lengthen in the summer.",
        "licence": "You need a licence to drive a car in this country.",
        "license": "The restaurant was granted a license to sell alcohol.",
        "lightning": "The storm was accompanied by loud thunder and lightning.",
        "likeable": "The new teacher is very likeable.",
        "malicious": "The software protected the computer from malicious attacks.",
        "marvellous": "The view from the top of the mountain was marvellous.",
        "misbehave": "Children sometimes misbehave when they seek attention.",
        "mischievous": "The mischievous cat knocked over the vase.",
        "misfired": "The plan misfired, leading to unexpected complications.",
        "mistake": "It was an honest mistake to forget the appointment.",
        "morning": "She enjoys a run every morning.",
        "mourning": "The country was in mourning after the loss of its leader.",
        "muscle": "Regular exercise helps build muscle strength.",
        "muscles": "Regular exercise strengthens your muscles.",
        "mystery": "The disappearance of the artifact remains a mystery.",
        "myth": "The story is just an old myth.",
        "necessary": "It's necessary to have a passport for international travel.",
        "neighbour": "Our neighbour offered to water our plants while we were away.",
        "Newton": "Newton is famous for his laws of motion.",
        "notice": "Did you notice any changes in his behavior?",
        "noticeable": "There was a noticeable improvement in her mood.",
        "nuisance": "The noise from the construction site is a real nuisance.",
        "nutritious": "The meal was both delicious and nutritious.",
        "observant": "He's very observant and notices details others might miss.",
        "observing": "They spent the night observing stars.",
        "occupy": "The company plans to occupy the new office building next month.",
        "occur": "The accident occurred just before dawn.",
        "official": "The official report was released yesterday.",
        "opportunity": "This job presents an excellent opportunity for career advancement.",
        "orbits": "The Earth orbits the sun once every year.",
        "overtake": "The cyclist managed to overtake the car.",
        "parliament": "The new law was passed by parliament last week.",
        "partial": "He only had a partial understanding of the topic.",
        "passed": "The law was passed by a unanimous vote.",
        "past": "He walked past the store on his way home.",
        "payable": "The invoice is payable within 30 days.",
        "persuade": "He managed to persuade his friend to join him.",
        "physical": "Regular physical activity is important for maintaining good health.",
        "physically": "The hike was more physically demanding than expected.",
        "pleasure": "It was a pleasure to meet you.",
        "pollen": "Bees collect pollen from flowers.",
        "pollinate": "Bees help pollinate plants, making them crucial for the ecosystem.",
        "possible": "Is it possible to reschedule the meeting?",
        "possibly": "How could she possibly say no to such an offer?",
        "potential": "The potential for growth in this market is huge.",
        "practice": "Practice makes perfect.",
        "practise": "She needs to practise her piano scales.",
        "precedes": "The introduction precedes the first chapter.",
        "precious": "Time with family is precious.",
        "preference": "My preference is for Italian food.",
        "preferred": "She preferred chocolate ice cream over vanilla.",
        "prejudice": "We must work together to combat prejudice and discrimination.",
        "preview": "The trailer offers a preview of the upcoming movie.",
        "principal": "The principal spoke at the school assembly.",
        "principle": "She stood by her principles, even when it was hard.",
        "privilege": "Education is a right, not a privilege.",
        "proceed": "After the break, we will proceed with the lecture.",
        "profession": "Teaching is a profession that requires a lot of patience.",
        "profit": "The company made a significant profit last year.",
        "programme": "The educational programme aims to reach underserved communities.",
        "pronunciation": "Correct pronunciation is essential for effective communication.",
        "prophet": "The prophet shared his visions of the future.",
        "pure": "The ring is made of pure gold.",
        "purify": "The water filter can purify contaminated water.",
        "pyramid": "The ancient pyramid was built thousands of years ago.",
        "queue": "We stood in the queue for over an hour.",
        "reappear": "The symptoms may reappear if treatment is stopped.",
        "rebuild": "The community came together to rebuild after the fire.",
        "recognise": "I didn't recognise him with his new haircut.",
        "recommend": "Can you recommend a good restaurant?",
        "referee": "The referee called a foul during the game.",
        "reference": "The author included a reference to her previous work.",
        "referral": "The doctor gave me a referral to a consultant.",
        "referred": "The patient was referred to a specialist.",
        "referring": "When referring to the manual, be sure to note the updates.",
        "relevant": "Please keep your comments relevant to the discussion.",
        "reliable": "She's proven to be a reliable and trustworthy friend.",
        "remarkable": "His memory for dates is truly remarkable.",
        "residential": "The area is zoned for residential use.",
        "restaurant": "This restaurant is known for its excellent seafood.",
        "results": "The results of the experiment were inconclusive.",
        "retake": "She had to retake the exam.",
        "return": "Please return the book when you're finished with it.",
        "reuse": "You can reuse the jar for storing spices.",
        "revisit": "Let's revisit our strategy at the next meeting.",
        "rewrite": "The author decided to rewrite the final chapter.",
        "rhyme": "Can you think of a word that rhymes with 'time'?",
        "rhythm": "The song has a catchy rhythm.",
        "rough": "The sea was rough, making the boat trip challenging.",
        "sacrifice": "Many have made great sacrifices for their countries.",
        "scissors": "Please pass me the scissors to cut this paper.",
        "secretary": "The secretary took notes during the meeting.",
        "sensible": "It's sensible to save money for unexpected expenses.",
        "serial": "The police are searching for a serial offender.",
        "serious": "The meeting addressed several serious concerns.",
        "should": "You should check the oil level in your car regularly.",
        "shoulder": "He carried the heavy bag on his shoulder.",
        "shouldn't": "You shouldn't worry too much about the small things.",
        "signature": "Please leave your signature at the bottom of the form.",
        "sincere": "His apology seemed sincere.",
        "sincerely": "Yours sincerely, John Doe.",
        "soldier": "The soldier served in the military for many years.",
        "spacious": "They moved to a more spacious apartment.",
        "special": "They planned a special dinner for their anniversary.",
        "stationary": "The car remained stationary in traffic for over an hour.",
        "stationery": "She bought new stationery for the school year.",
        "steal": "It's wrong to steal, regardless of the circumstances.",
        "steel": "The bridge is made of steel.",
        "stomach": "I have a stomach ache.",
        "stories": "The book contains stories from ancient mythology.",
        "substantial": "They made a substantial profit last year.",
        "sufficient": "Ensure there is sufficient evidence before making a decision.",
        "suggest": "What do you suggest we do this weekend?",
        "superficial": "The movie's plot was criticized for being superficial.",
        "suspicious": "The detective found the evidence to be suspicious.",
        "symbol": "The heart is a symbol of love.",
        "system": "The solar system consists of the sun and the planets orbiting it.",
        "television": "They bought a new television for the living room.",
        "temperature": "The temperature outside is very cold today.",
        "terrible": "They received terrible service at the restaurant.",
        "terribly": "He felt terribly about the mistake.",
        "thorough": "The investigation was thorough and covered all aspects.",
        "though": "It was hard, though not impossible, to find.",
        "thought": "She thought about the problem all day.",
        "tolerance": "Building tolerance is essential in a diverse society.",
        "tolerant": "The community is known for being tolerant of different cultures.",
        "tough": "The new job was tough at first, but she adapted quickly.",
        "transferred": "He transferred to a new school this year.",
        "transparent": "The glass was almost completely transparent.",
        "tremendous": "The support from the community was tremendous.",
        "twelfth": "Today is her twelfth birthday.",
        "typical": "It was a typical day at the office.",
        "understandable": "Her frustration is understandable given the circumstances.",
        "variety": "The store offers a wide variety of products.",
        "vegetable": "Carrots are my favorite vegetable.",
        "vehicle": "The vehicle was parked outside the house.",
        "vicious": "The story featured a vicious villain.",
        "visible": "The moon is clearly visible tonight.",
        "visibly": "He was visibly upset by the news.",
        "wary": "Be wary of deals that seem too good to be true.",
        "wear": "What will you wear to the interview?",
        "weary": "After the long journey, they were all very weary.",
        "where": "Where did you put the keys?",
        "who's": "Who's going to the party tonight?",
        "whose": "Whose coat is this hanging in the hallway?",
        "women's": "The women's clothing section is on the second floor.",
        "yacht": "They spent the weekend sailing on their yacht.",
    }

    let score = 0;
    let attempts = 0;
    const testSize = 10;
    let currentWord;

    let countdown; // Holds the countdown interval object

    let currentTestedWords;

    function startCountdown(duration = 60) {
        clearInterval(countdown); // Clear existing countdowns to prevent multiple timers
        let timeLeft = duration;
        
        // Update the countdown display immediately, then start the interval
        document.getElementById('countdownTimer').innerText = `Time left: ${timeLeft} seconds`;
        countdown = setInterval(() => {
            timeLeft--;
            document.getElementById('countdownTimer').innerText = `Time left: ${timeLeft} seconds`;
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timeExpired(); // Handle time expiration
            }
        }, 1000); // Update every second
    }

    function timeExpired() {
        // Handle what happens when the time runs out
        // For example, automatically proceed to the next word or finish the test
        document.getElementById('statusText').innerText = "Time's up! Moving to the next word.";
        submitAnswer(); // You might need to adjust this function to handle time expiration properly
    }

    function prepareWeightedSelectionPool(wordData) {
        let selectionPool = [];
        Object.keys(wordData).sort().forEach(word => {
            const { correct, incorrect, last } = wordData[word];
            // Assigning weight: More weight to words never tried or often incorrect
            let weight = last ? 1 : ( incorrect === 0 ? 10 : 100 * Math.max( 1, incorrect - correct ) ); // Simple weight calculation
            weight = Math.max(weight, 1); // Ensure at least a weight of 1
            // console.log(word, weight);

            for (let i = 0; i < weight; i++) {
                selectionPool.push(word); // Add the word 'weight' times to the pool
            }
        });
        return selectionPool;
    }

    function selectWeightedWord(wordData) {
        const selectionPool = prepareWeightedSelectionPool(wordData);
        if (selectionPool.length === 0) return null; // Handle case with no words

        while (true) {
            const candidate = selectionPool[Math.floor(Math.random() * selectionPool.length)];
            if ( ! currentTestedWords.has(candidate) ) {
                currentTestedWords.add(candidate);
                return candidate;
            }
        }
    }

    function updateLearnedWordsInfo(word, wasCorrect) {
        let wordAttempts = loadWordAttempts();

        wordAttempts[word].last = wasCorrect;
        if (wasCorrect) {
            wordAttempts[word].correct += 1;
        } else {
            wordAttempts[word].incorrect += 1;
        }

        localStorage.setItem('learnedWordsInfo', JSON.stringify(wordAttempts));
        updateLearnedWordsDisplay();
    }

    function loadWordAttempts() {
        let wordAttempts = JSON.parse(localStorage.getItem('learnedWordsInfo')) || {};
        for (const w of Object.keys(words)) {
            if (!wordAttempts[w]) {
                wordAttempts[w] = { correct: 0, incorrect: 0 };
            }
        }
        return wordAttempts;
    }

    // Function to update the display of learned words count
    function updateLearnedWordsDisplay() {
        let learnedWordsInfo = loadWordAttempts();
        let correctCount = 0;
        Object.values(learnedWordsInfo).forEach(info => {
            if (info.correct > 0) correctCount++;
        });

        document.getElementById('learnedWordsCount').innerText = `Learned Spellings: ${correctCount} / ${Object.keys(words).length}`;
    }

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }


    function initializeTest() {
        score = 0;
        attempts = 0;
        currentTestedWords = new Set();
        document.getElementById('scoreText').innerText = `Score: ${score}/${testSize}`;
        document.getElementById('startTestButton').style.display = "none";
        document.getElementById('userInput').style.display = "";
        document.getElementById('submitAnswerButton').style.display = "";
        document.getElementById('countdownTimer').style.display = "";
        document.getElementById('userInput').focus();
        hideResults();
        nextWord();
    }

    function nextWord() {
        if (attempts >= testSize) {
            finishTest();
            return;
        }
        startCountdown();
        currentWord = selectWeightedWord(loadWordAttempts());
        speak(`Please spell the word: ${currentWord}. ${words[currentWord]}`);
        document.getElementById('statusText').innerText = "Listen and type the spelling.";
        document.getElementById('userInput').disabled = false;
        document.getElementById('submitAnswerButton').disabled = false;
        document.getElementById('userInput').focus();
    }

    function submitAnswer() {

        document.getElementById('userInput').disabled = true;
        document.getElementById('submitAnswerButton').disabled = true;

        clearInterval(countdown);

        // Stop any currently speaking utterance immediately
        speechSynthesis.cancel();

        const userAnswer = document.getElementById('userInput').value.trim();
        
        const correct = userAnswer.toLowerCase() === currentWord.toLowerCase();
        updateLearnedWordsInfo(currentWord, correct);
        if (correct) {
            score++;
            speak("Correct!");
            document.getElementById('statusText').innerText = "Correct!";
        } else {
            speak(`Incorrect. The correct spelling is ${currentWord}.`);
            document.getElementById('statusText').innerText = `Incorrect. The correct spelling is "${currentWord}".`;
            // Show the correct spelling for a brief period before moving to the next word
            setTimeout(() => {
                nextWord();
            }, 5000); // Adjust the delay as needed
            document.getElementById('userInput').value = ''; // Clear input field
            document.getElementById('scoreText').innerText = `Score: ${score}/${testSize}`;
            attempts++;
            return; // Return early to prevent immediate call to nextWord
        }

        document.getElementById('userInput').value = ''; // Clear input field after showing the correct answer or if the answer was correct
        document.getElementById('scoreText').innerText = `Score: ${score}/${testSize}`;
        attempts++;
        nextWord();
    }


    function finishTest() {
        document.getElementById('statusText').innerText = "Test completed!";
        document.getElementById('startTestButton').style.display = "";
        document.getElementById('userInput').style.display = "none";
        document.getElementById('submitAnswerButton').style.display = "none";
        document.getElementById('countdownTimer').style.display = "none";
        speak(`Test completed. Your score is ${score} out of ${testSize}.`);
        displayTestResults(loadWordAttempts());
    }

    function displayTestResults(wordData) {
        const resultsContainer = hideResults(); // Clear previous results

        const tested = Object.keys(wordData).sort().filter(word => wordData[word].correct + wordData[word].incorrect);

        if ( tested.length === 0 ) return;

        // Use a Bootstrap card for styling
        const card = document.createElement('div');
        card.className = 'card';
    
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.textContent = 'Test Results';
        card.appendChild(cardHeader);
    
        const listGroup = document.createElement('ul');
        listGroup.className = 'list-group list-group-flush';
    
        tested.forEach(word => {
            const { correct, incorrect, last } = wordData[word];
            const listItem = document.createElement('li');
            listItem.className = `list-group-item ${last ? 'list-group-item-success' : 'list-group-item-danger'}`;
    
            // Customize the display text as needed
            const statusText = last ? 'Correct' : 'Incorrect';
            listItem.innerHTML = `<strong>${word}</strong>: ${statusText} (Correct: ${correct}, Incorrect: ${incorrect})`;
    
            listGroup.appendChild(listItem);
        });
    
        card.appendChild(listGroup);
        resultsContainer.appendChild(card);
    }
    
    function resetKeyboardSuggestions() {
        userInput.type = 'password';
        setTimeout(() => {
            userInput.type = 'text';
            // Optionally, focus the dummy input and then refocus the user input
            dummyInput.focus();
            setTimeout(() => {
                userInput.focus();
            }, 0);
        }, 0);
    }

    document.getElementById('startTestButton').addEventListener('click', initializeTest);
    document.getElementById('submitAnswerButton').addEventListener('click', submitAnswer);

    const userInput = document.getElementById('userInput');
    const dummyInput = document.getElementById('dummyInput');

    userInput.addEventListener('focus', resetKeyboardSuggestions);

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !this.disabled) {
            submitAnswer();
            return;
        }
        resetKeyboardSuggestions();
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        updateLearnedWordsDisplay();
        displayTestResults(loadWordAttempts());
        
    });


    function hideResults() {
        const resultsContainer = document.getElementById('testResults');
        resultsContainer.innerHTML = ''; // Clear previous results
        return resultsContainer;
    }
})()