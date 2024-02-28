(function() {

    const words = [
        {"word": "shouldn’t", "example": "You shouldn’t worry too much about the small things."},
        {"word": "couldn’t", "example": "She couldn’t believe her luck when she found a $20 bill on the ground."},
        {"word": "collision", "example": "The collision between the two cars caused a lot of traffic."},
        {"word": "preferred", "example": "She preferred chocolate ice cream over vanilla."},
        {"word": "television", "example": "They bought a new television for the living room."},
        {"word": "tremendous", "example": "The support from the community was tremendous."},
        {"word": "completion", "example": "Upon completion of the project, the team celebrated."},
        {"word": "explanation", "example": "He gave a detailed explanation of the procedure."},
        {"word": "profession", "example": "Teaching is a profession that requires a lot of patience."},
        {"word": "pronunciation", "example": "Correct pronunciation is essential for effective communication."},
        {"word": "chef", "example": "The chef prepared a four-course meal for the guests."},
        {"word": "stories", "example": "The book contains stories from ancient mythology."},
        {"word": "women’s", "example": "The women’s clothing section is on the second floor."},
        {"word": "bicycles", "example": "The city has a new lane dedicated to bicycles."},
        {"word": "famous", "example": "The artist became famous for his unique style."},
        {"word": "serious", "example": "The meeting addressed several serious concerns."},
        {"word": "pleasure", "example": "It was a pleasure to meet you."},
        {"word": "chemist", "example": "The chemist is working on a new formula."},
        {"word": "colleague", "example": "My colleague will handle your request."},
        {"word": "scissors", "example": "Please pass me the scissors to cut this paper."},
        {"word": "thought", "example": "She thought about the problem all day."},
        {"word": "brought", "example": "He brought his camera to the event."},
        {"word": "fought", "example": "The soldiers fought bravely in the battle."},
        {"word": "rough", "example": "The sea was rough, making the boat trip challenging."},
        {"word": "tough", "example": "The new job was tough at first, but she adapted quickly."},
        {"word": "enough", "example": "There was not enough time to finish the exam."},
        {"word": "cough", "example": "He has a persistent cough that won’t go away."},
        {"word": "although", "example": "Although it was raining, they decided to go for a walk."},
        {"word": "though", "example": "It was hard, though not impossible, to find."},
        {"word": "thorough", "example": "The investigation was thorough and covered all aspects."},
        {"word": "spacious", "example": "They moved to a more spacious apartment."},
        {"word": "vicious", "example": "The story featured a vicious villain."},
        {"word": "precious", "example": "Time with family is precious."},
        {"word": "delicious", "example": "The homemade cake was absolutely delicious."},
        {"word": "malicious", "example": "The software protected the computer from malicious attacks."},
        {"word": "suspicious", "example": "The detective found the evidence to be suspicious."},
        {"word": "conscious", "example": "She is conscious of her impact on the environment."},
        {"word": "disastrous", "example": "The party was disastrous, with everything going wrong."},
        {"word": "mischievous", "example": "The mischievous cat knocked over the vase."},
        {"word": "amateur", "example": "As an amateur photographer, he enjoyed taking pictures of nature."},
        {"word": "cautious", "example": "Be cautious when walking alone at night."},
        {"word": "ambitious", "example": "The project was ambitious but successful."},
        {"word": "fictitious", "example": "The characters in the novel are entirely fictitious."},
        {"word": "infectious", "example": "His laughter was infectious, making everyone smile."},
        {"word": "nutritious", "example": "The meal was both delicious and nutritious."},
        {"word": "available", "example": "The new book will be available next week."},
        {"word": "forty", "example": "She celebrated her fortieth birthday with a big party."},
        {"word": "twelfth", "example": "His birthday is on the twelfth of June."},
        {"word": "hindrance", "example": "Lack of funding was a major hindrance to the project."},
        {"word": "government", "example": "The government announced new policies to improve healthcare."},
        {"word": "crucial", "example": "Making informed decisions is crucial for success."},
        {"word": "facial", "example": "She booked a facial treatment at the spa."},
        {"word": "official", "example": "The official report was released yesterday."},
        {"word": "special", "example": "They planned a special dinner for their anniversary."},
        {"word": "beneficial", "example": "Regular exercise is beneficial to your health."},
        {"word": "artificial", "example": "The room was lit by artificial light."},
        {"word": "superficial", "example": "The movie's plot was criticized for being superficial."},
        {"word": "average", "example": "His performance was above average."},
        {"word": "awkward", "example": "The silence that followed was awkward."},
        {"word": "bargain", "example": "She found a bargain at the local flea market."},
        {"word": "partial", "example": "He only had a partial understanding of the topic."},
        {"word": "essential", "example": "Water is essential for life."},
        {"word": "potential", "example": "The potential for growth in this market is huge."},
        {"word": "substantial", "example": "They made a substantial profit last year."},
        {"word": "confidential", "example": "This document is confidential and should not be shared."},
        {"word": "residential", "example": "The area is zoned for residential use."},
        {"word": "influential", "example": "She is one of the most influential figures in the industry."},
        {"word": "variety", "example": "The store offers a wide variety of products."},
        {"word": "controversy", "example": "The decision sparked a lot of controversy."},
        {"word": "curiosity", "example": "His curiosity led him to explore new topics."},
        {"word": "advice", "example": "She gave me some valuable advice."},
        {"word": "advise", "example": "I would advise caution when dealing with strangers."},
        {"word": "device", "example": "The device can be controlled remotely."},
        {"word": "devise", "example": "They need to devise a plan to solve the issue."},
        {"word": "licence", "example": "You need a licence to drive a car in this country."},
        {"word": "license", "example": "The restaurant was granted a license to sell alcohol."},
        {"word": "practice", "example": "Practice makes perfect."},
        {"word": "practise", "example": "She needs to practise her piano scales."},
        {"word": "develop", "example": "They plan to develop the vacant lot into a shopping center."},
        {"word": "ancient", "example": "The museum houses ancient artifacts from Egypt."},
        {"word": "occur", "example": "The accident occurred at around 3 PM."},
        {"word": "suggest", "example": "What do these results suggest to you?"},
        {"word": "attached", "example": "Please find the document attached to the email."},
        {"word": "appreciate", "example": "I really appreciate your help with this."},
        {"word": "according", "example": "According to the weather forecast, it will rain tomorrow."},
        {"word": "aggressive", "example": "The company adopted an aggressive marketing strategy."},
        {"word": "recommend", "example": "Can you recommend a good restaurant?"},
        {"word": "immediate", "example": "He saw an immediate improvement in his mood."},
        {"word": "communicate", "example": "Effective leaders communicate clearly and concisely."},
        {"word": "opportunity", "example": "This job offers a great opportunity for career advancement."},
        {"word": "bruise", "example": "She had a large bruise on her leg after the fall."},
        {"word": "category", "example": "This question falls into a new category."},
        {"word": "cemetery", "example": "The old cemetery is said to be haunted."},
        {"word": "definite", "example": "We need a definite answer by tomorrow."},
        {"word": "desperate", "example": "He was desperate to find a job."},
        {"word": "dictionary", "example": "She looked up the word in the dictionary."},
        {"word": "embarrass", "example": "He didn't want to embarrass himself in front of his friends."},
        {"word": "environment", "example": "We must take action to protect the environment."},
        {"word": "exaggerate", "example": "He tends to exaggerate his accomplishments."},
        {"word": "marvellous", "example": "The view from the top of the mountain was marvellous."},
        {"word": "borough", "example": "She lives in the Brooklyn borough of New York City."},
        {"word": "advice", "example": "Always seek advice from someone you trust."},
        {"word": "nutritious", "example": "Eating nutritious food is essential for good health."},
        {"word": "confidential", "example": "The documents were marked as confidential."},
        {"word": "suspicious", "example": "His behavior was suspicious, prompting an investigation."},
        {"word": "thorough", "example": "The detective conducted a thorough search of the area."},
        {"word": "nuisance", "example": "Loud neighbors can be a real nuisance."},
        {"word": "parliament", "example": "The new law was passed by parliament last week."},
        {"word": "privilege", "example": "Driving is a privilege, not a right."},
        {"word": "secretary", "example": "The secretary scheduled meetings for the week."},
        {"word": "admiration", "example": "She has earned the admiration of her peers."},
        {"word": "admirable", "example": "His dedication to the cause is admirable."},
        {"word": "adorable", "example": "The baby's smile was absolutely adorable."},
        {"word": "application", "example": "The job application process can be quite lengthy."},
        {"word": "applicable", "example": "These rules are not applicable in every situation."},
        {"word": "consideration", "example": "Take all factors into consideration before making a decision."},
        {"word": "considerable", "example": "The project required a considerable amount of time."},
        {"word": "vegetable", "example": "Eating a variety of vegetable is good for your health."},
        {"word": "committee", "example": "The committee will review the proposal tomorrow."},
        {"word": "community", "example": "The community center offers classes for all age groups."},
        {"word": "change", "example": "Change can be difficult, but it's often necessary."},
        {"word": "changeable", "example": "The weather here is quite changeable."},
        {"word": "notice", "example": "Did you notice any changes in his behavior?"},
        {"word": "noticeable", "example": "There was a noticeable improvement in her mood."},
        {"word": "charge", "example": "The restaurant will charge a fee for delivery."},
        {"word": "chargeable", "example": "Extra services are chargeable at the hotel."},
        {"word": "correspond", "example": "Her account does not correspond with the other witnesses."},
        {"word": "accompany", "example": "Children must be accompanied by an adult."},
        {"word": "apparent", "example": "It became apparent that he was not coming."},
        {"word": "payable", "example": "The invoice is payable within 30 days."},
        {"word": "likeable", "example": "He's a very likeable person with a good sense of humor."},
        {"word": "enjoyable", "example": "The concert was really enjoyable."},
        {"word": "reliable", "example": "She's proven to be a reliable and trustworthy friend."},
        {"word": "actionable", "example": "The report provided actionable insights for the team."},
        {"word": "dependable", "example": "The old truck was still dependable after all these years."},
        {"word": "comfortable", "example": "Make sure you wear comfortable shoes for the hike."},
        {"word": "remarkable", "example": "His memory for dates is truly remarkable."},
        {"word": "understandable", "example": "Her frustration is understandable given the circumstances."},
        {"word": "immediately", "example": "The response to the emergency was immediate."},
        {"word": "sensible", "example": "It's sensible to save money for unexpected expenses."},
        {"word": "visible", "example": "The moon is clearly visible tonight."},
        {"word": "visibly", "example": "He was visibly upset by the news."},
        {"word": "possible", "example": "Is it possible to reschedule the meeting?"},
        {"word": "possibly", "example": "How could she possibly say no to such an offer?"},
        {"word": "horrible", "example": "The news reported a horrible accident on the freeway."},
        {"word": "horribly", "example": "The play was horribly executed."},
        {"word": "terrible", "example": "They received terrible service at the restaurant."},
        {"word": "terribly", "example": "He felt terribly about the mistake."},
        {"word": "incredibly", "example": "The dessert was incredibly delicious."},
        {"word": "aisle", "example": "She walked down the aisle on her wedding day."},
        {"word": "isle", "example": "The isle is known for its stunning beaches."},
        {"word": "farther", "example": "He threw the ball farther than anyone else."},
        {"word": "father", "example": "Her father gave her a supportive hug."},
        {"word": "guessed", "example": "I guessed the answer to the riddle."},
        {"word": "guest", "example": "We have a guest staying with us this weekend."},
        {"word": "allowed", "example": "Pets are not allowed in the hotel."},
        {"word": "aloud", "example": "She read the letter aloud to the family."},
        {"word": "heard", "example": "I heard a strange noise outside."},
        {"word": "herd", "example": "A herd of cattle was grazing in the field."},
        {"word": "wear", "example": "What will you wear to the interview?"},
        {"word": "where", "example": "Where did you put the keys?"},
        {"word": "led", "example": "She led the team to a victory."},
        {"word": "lead", "example": "They found lead in the old pipes."},
        {"word": "past", "example": "He walked past the store on his way home."},
        {"word": "passed", "example": "The law was passed by a unanimous vote."},
        {"word": "morning", "example": "She enjoys a run every morning."},
        {"word": "mourning", "example": "The country was in mourning after the loss of its leader."},
        {"word": "precedes", "example": "The introduction precedes the first chapter."},
        {"word": "proceed", "example": "After the break, we will proceed with the lecture."},
        {"word": "doubt", "example": "There was no doubt in her mind about the decision."},
        {"word": "island", "example": "They spent a week on a tropical island."},
        {"word": "lamb", "example": "The lamb followed its mother everywhere."},
        {"word": "debt", "example": "He managed to pay off his debt in five years."},
        {"word": "climb", "example": "They plan to climb the mountain early tomorrow."},
        {"word": "knife", "example": "She used a sharp knife to chop the vegetables."},
        {"word": "knob", "example": "Turn the knob to the right to open the door."},
        {"word": "could", "example": "I could see the disappointment in his eyes."},
        {"word": "should", "example": "You should check the oil level in your car regularly."},
        {"word": "answer", "example": "She knew the answer to the teacher's question."},
        {"word": "results", "example": "The results of the experiment were inconclusive."},
        {"word": "orbits", "example": "The Earth orbits the sun once every year."},
        {"word": "evidence", "example": "There was not enough evidence to convict him."},
        {"word": "observing", "example": "They spent the night observing stars."},
        {"word": "reliable", "example": "This source is reliable and trustworthy."},
        {"word": "friction", "example": "Friction between the two surfaces causes heat."},
        {"word": "gravity", "example": "Gravity keeps us grounded on the Earth."},
        {"word": "Newton", "example": "Newton is famous for his laws of motion."},
        {"word": "transparent", "example": "The glass was almost completely transparent."},
        {"word": "temperature", "example": "The temperature dropped significantly overnight."},
        {"word": "hymns", "example": "The choir sang hymns during the service."},
        {"word": "myth", "example": "The story is just an old myth."},
        {"word": "Egypt", "example": "The pyramids are one of Egypt's most famous landmarks."},
        {"word": "crystal", "example": "The crystal vase sparkled in the sunlight."},
        {"word": "typical", "example": "It was a typical day at the office."},
        {"word": "mystery", "example": "The disappearance of the artifact remains a mystery."},
        {"word": "pyramid", "example": "The ancient pyramid was built thousands of years ago."},
        {"word": "physical", "example": "Regular physical activity is important for health."},
        {"word": "symbol", "example": "The dove is a symbol of peace."},
        {"word": "system", "example": "The solar system consists of the sun and the planets orbiting it."},
        {"word": "debt", "example": "She worked two jobs to pay off her student debt."},
        {"word": "knife", "example": "Be careful when handling a sharp knife."},
        {"word": "lamb", "example": "The lamb frolicked in the meadow."},
        {"word": "adorable", "example": "The puppy's adorable antics made everyone smile."},
        {"word": "enjoyable", "example": "The concert was very enjoyable."},
        {"word": "admirable", "example": "His commitment to volunteering is admirable."},
        {"word": "horrible", "example": "The movie was so horrible that we left early."},
        {"word": "likeable", "example": "The new teacher is very likeable."},
        {"word": "terrible", "example": "The news reported a terrible storm on the way."},
        {"word": "physically", "example": "The hike was more physically demanding than expected."},
        {"word": "pollen", "example": "Bees collect pollen from flowers."},
        {"word": "pollinate", "example": "Bees help pollinate plants, making them crucial for the ecosystem."},
        {"word": "apology", "example": "He offered an apology for his late arrival."},
        {"word": "apologise", "example": "I must apologise for my earlier mistake."},
        {"word": "length", "example": "The length of the table is 2 meters."},
        {"word": "lengthen", "example": "The days lengthen in the summer."},
        {"word": "deep", "example": "The water in this part of the lake is very deep."},
        {"word": "deepen", "example": "The crisis has served to deepen the country's economic difficulties."},
        {"word": "pure", "example": "The ring is made of pure gold."},
        {"word": "purify", "example": "The water filter can purify contaminated water."},
        {"word": "retake", "example": "She had to retake the exam."},
        {"word": "revisit", "example": "Let's revisit our strategy at the next meeting."},
        {"word": "defrost", "example": "Remember to defrost the chicken before cooking."},
        {"word": "decrease", "example": "We've seen a decrease in the number of new cases."},
        {"word": "rebuild", "example": "The community came together to rebuild after the fire."},
        {"word": "preview", "example": "The trailer offers a preview of the upcoming movie."},
        {"word": "misbehave", "example": "Children sometimes misbehave when they seek attention."},
        {"word": "disappear", "example": "The magician made the rabbit disappear."},
        {"word": "identity", "example": "She struggled with her identity during her teenage years."},
        {"word": "individual", "example": "Each individual has their own unique talents."},
        {"word": "defuse", "example": "The negotiator was able to defuse the situation."},
        {"word": "return", "example": "Please return the book when you're finished with it."},
        {"word": "rewrite", "example": "The author decided to rewrite the final chapter."},
        {"word": "reuse", "example": "You can reuse the jar for storing spices."},
        {"word": "overtake", "example": "The cyclist managed to overtake the car."},
        {"word": "mistake", "example": "It was an honest mistake to forget the appointment."},
        {"word": "reappear", "example": "The symptoms may reappear if treatment is stopped."},
        {"word": "misfired", "example": "The plan misfired, leading to unexpected complications."},
        {"word": "interfere", "example": "Please don't interfere with my work."},
        {"word": "interrupt", "example": "Sorry to interrupt, but I have some news."},
        {"word": "effect", "example": "The new law will take effect next month."},
        {"word": "affect", "example": "The weather can greatly affect your mood."},
        {"word": "cereal", "example": "Cereal is a common breakfast food."},
        {"word": "serial", "example": "The police are searching for a serial offender."},
        {"word": "altar", "example": "The couple stood before the altar to exchange vows."},
        {"word": "alter", "example": "She decided to alter her wedding dress."},
        {"word": "stationary", "example": "The car remained stationary in traffic for over an hour."},
        {"word": "stationery", "example": "She bought new stationery for the school year."},
        {"word": "compliment", "example": "He received a compliment on his presentation."},
        {"word": "complements", "example": "The wine complements the cheese perfectly."},
        {"word": "descent", "example": "The plane began its descent towards the airport."},
        {"word": "dissent", "example": "There was considerable dissent among the members of the committee."},
        {"word": "draft", "example": "He completed the first draft of his novel."},
        {"word": "draught", "example": "A cold draught came through the crack in the window."},
        {"word": "desert", "example": "The camel is well adapted to life in the desert."},
        {"word": "dessert", "example": "For dessert, we had apple pie and ice cream."},
        {"word": "steal", "example": "It's wrong to steal, regardless of the circumstances."},
        {"word": "steel", "example": "The bridge is made of steel."},
        {"word": "profit", "example": "The company made a significant profit last year."},
        {"word": "prophet", "example": "The prophet shared his visions of the future."},
        {"word": "wary", "example": "Be wary of deals that seem too good to be true."},
        {"word": "weary", "example": "After the long journey, they were all very weary."},
        {"word": "who’s", "example": "Who’s going to the party tonight?"},
        {"word": "whose", "example": "Whose coat is this hanging in the hallway?"},
        {"word": "principal", "example": "The principal spoke at the school assembly."},
        {"word": "principle", "example": "She stood by her principles, even when it was hard."},
        {"word": "complete", "example": "He managed to complete the task on time."},
        {"word": "recognise", "example": "I didn't recognise him with his new haircut."},
        {"word": "language", "example": "She speaks several languages fluently."},
        {"word": "leisure", "example": "He enjoys playing golf at his leisure."},
        {"word": "hesitant", "example": "She was hesitant to make the decision without more information."},
        {"word": "tolerant", "example": "The community is known for being tolerant of different cultures."},
        {"word": "tolerance", "example": "Building tolerance is essential in a diverse society."},
        {"word": "observant", "example": "He's very observant and notices details others might miss."},
        {"word": "expectancy", "example": "Life expectancy has increased over the last century."},
        {"word": "lightning", "example": "The lightning lit up the entire sky."},
        {"word": "muscles", "example": "Regular exercise strengthens your muscles."},
        {"word": "neighbour", "example": "Our neighbour kindly offered to feed the cat while we were away."},
        {"word": "persuade", "example": "He managed to persuade his friend to join him."},
        {"word": "programme", "example": "The education programme aims to improve literacy rates."},
        {"word": "innocent", "example": "The jury found the defendant innocent of the charges."},
        {"word": "innocence", "example": "The evidence clearly proved his innocence."},
        {"word": "decent", "example": "He's a decent person who always tries to do the right thing."},
        {"word": "decency", "example": "The movie lacks the decency expected by the audience."},
        {"word": "confident", "example": "She's confident that the plan will succeed."},
        {"word": "confidence", "example": "Public confidence in the government has waned."},
        {"word": "assistant", "example": "The assistant manager will handle your request."},
        {"word": "assistance", "example": "Thank you for your assistance with the project."},
        {"word": "independence", "example": "The country celebrated 50 years of independence."},
        {"word": "existence", "example": "The existence of extraterrestrial life is still debated."},
        {"word": "referred", "example": "The patient was referred to a specialist."},
        {"word": "referral", "example": "The doctor gave me a referral to a consultant."},
        {"word": "referring", "example": "When referring to the manual, be sure to note the updates."},
        {"word": "transferred", "example": "He transferred to a new school this year."},
        {"word": "reference", "example": "The author included a reference to her previous work."},
        {"word": "referee", "example": "The referee called a foul during the game."},
        {"word": "preference", "example": "My preference is for Italian food."},
        {"word": "interfere", "example": "Please don't interfere with the experiment."},
        {"word": "interrupt", "example": "Sorry to interrupt, but your 2:00 PM appointment is here."},
        {"word": "queue", "example": "We had to stand in a long queue to get tickets."},
        {"word": "accommodate", "example": "The hotel can accommodate up to 500 guests."},
        {"word": "accompany", "example": "Children must be accompanied by an adult at all times."},
        {"word": "according", "example": "According to the weather forecast, it will rain tomorrow."},
        {"word": "achieve", "example": "With hard work, you can achieve your goals."},
        {"word": "aggressive", "example": "The company adopted an aggressive marketing strategy."},
        {"word": "amateur", "example": "He is an amateur painter, but his work is quite good."},
        {"word": "ancient", "example": "The museum has artifacts from ancient civilizations."},
        {"word": "apparent", "example": "It became apparent that we had taken the wrong route."},
        {"word": "appreciate", "example": "I really appreciate your help with this project."},
        {"word": "attached", "example": "Please find the document attached to this email."},
        {"word": "available", "example": "Tickets are available online and at the box office."},
        {"word": "average", "example": "His performance was above average this semester."},
        {"word": "awkward", "example": "The silence that followed was incredibly awkward."},
        {"word": "bargain", "example": "She found a great bargain at the local thrift store."},
        {"word": "bruise", "example": "She got a large bruise from bumping into the table."},
        {"word": "category", "example": "This question falls into the category of ethics."},
        {"word": "cemetery", "example": "The cemetery is the oldest in the city."},
        {"word": "committee", "example": "The committee will review the applications next week."},
        {"word": "communicate", "example": "Effective communication is key to a successful team."},
        {"word": "community", "example": "The community center offers various programs for residents."},
        {"word": "competition", "example": "The competition was fierce, but she won first place."},
        {"word": "conscience", "example": "He acted according to his conscience, despite the risks."},
        {"word": "conscious", "example": "She was very conscious of her impact on the environment."},
        {"word": "controversy", "example": "The new policy sparked a lot of controversy."},
        {"word": "convenience", "example": "For your convenience, we offer online booking."},
        {"word": "correspond", "example": "Her account does not correspond with the witness's statement."},
        {"word": "criticise", "example": "It's easy to criticise, but harder to offer solutions."},
        {"word": "curiosity", "example": "Curiosity drove him to explore new topics."},
        {"word": "definite", "example": "We need a definite answer by tomorrow."},
        {"word": "desperate", "example": "In desperate need of assistance, she called for help."},
        {"word": "determined", "example": "She was determined to finish the marathon."},
        {"word": "develop", "example": "The company plans to develop new software."},
        {"word": "dictionary", "example": "Use a dictionary to improve your vocabulary."},
        {"word": "disastrous", "example": "The picnic was disastrous due to the unexpected storm."},
        {"word": "embarrass", "example": "He was embarrassed by his mistake."},
        {"word": "environment", "example": "Protecting the environment is a key concern."},
        {"word": "equip", "example": "The new lab was equipped with the latest technology."},
        {"word": "equipped", "example": "The apartment is fully equipped for your stay."},
        {"word": "equipment", "example": "Safety equipment is mandatory on the construction site."},
        {"word": "especially", "example": "He loves all fruits, especially mangoes."},
        {"word": "exaggerate", "example": "Don't exaggerate; it wasn't that bad."},
        {"word": "excellent", "example": "She received excellent grades this term."},
        {"word": "existence", "example": "Many question the existence of extraterrestrial life."},
        {"word": "explanation", "example": "He owed her an explanation for his behavior."},
        {"word": "familiar", "example": "She became familiar with the city in just a few days."},
        {"word": "foreign", "example": "Learning a foreign language can be challenging."},
        {"word": "forty", "example": "He celebrated his fortieth birthday with a big party."},
        {"word": "frequently", "example": "He frequently visits the gym."},
        {"word": "government", "example": "The government introduced a new education policy."},
        {"word": "guarantee", "example": "The store offers a money-back guarantee."},
        {"word": "harass", "example": "The company has a strict policy against harassment."},
        {"word": "hindrance", "example": "Lack of funding was a major hindrance to the project."},
        {"word": "identity", "example": "Theft of personal identity is a serious crime."},
        {"word": "immediately", "example": "The problem needs to be addressed immediately."},
        {"word": "immediate", "example": "There was an immediate improvement in her mood."},
        {"word": "individual", "example": "Each individual has a unique set of skills."},
        {"word": "interfere", "example": "Please do not interfere with the investigation."},
        {"word": "interrupt", "example": "Please do not interrupt while someone else is speaking."},
        {"word": "language", "example": "English is a widely spoken language."},
        {"word": "leisure", "example": "He enjoys reading at his leisure."},
        {"word": "lightning", "example": "The storm was accompanied by loud thunder and lightning."},
        {"word": "marvellous", "example": "The magician's performance was marvellous."},
        {"word": "mischievous", "example": "The mischievous cat knocked over the vase."},
        {"word": "muscle", "example": "Regular exercise helps build muscle strength."},
        {"word": "necessary", "example": "It's necessary to have a passport for international travel."},
        {"word": "neighbour", "example": "Our neighbour offered to water our plants while we were away."},
        {"word": "nuisance", "example": "The noise from the construction site is a real nuisance."},
        {"word": "occupy", "example": "The company plans to occupy the new office building next month."},
        {"word": "occur", "example": "The accident occurred just before dawn."},
        {"word": "opportunity", "example": "This job presents an excellent opportunity for career advancement."},
        {"word": "parliament", "example": "The bill was passed in parliament yesterday."},
        {"word": "persuade", "example": "He managed to persuade her to try the new dish."},
        {"word": "physical", "example": "Regular physical activity is important for maintaining good health."},
        {"word": "prejudice", "example": "We must work together to combat prejudice and discrimination."},
        {"word": "privilege", "example": "Education is a right, not a privilege."},
        {"word": "profession", "example": "Teaching is a noble profession."},
        {"word": "programme", "example": "The educational programme aims to reach underserved communities."},
        {"word": "pronunciation", "example": "Her pronunciation has improved significantly."},
        {"word": "queue", "example": "We stood in the queue for over an hour."},
        {"word": "recognise", "example": "I didn't recognise him with his new haircut."},
        {"word": "recommend", "example": "Can you recommend a good Italian restaurant?"},
        {"word": "relevant", "example": "Please keep your comments relevant to the discussion."},
        {"word": "restaurant", "example": "This restaurant is known for its excellent seafood."},
        {"word": "rhyme", "example": "Can you think of a word that rhymes with 'time'?"},
        {"word": "rhythm", "example": "The song has a catchy rhythm."},
        {"word": "sacrifice", "example": "Many have made great sacrifices for their countries."},
        {"word": "secretary", "example": "The secretary took notes during the meeting."},
        {"word": "shoulder", "example": "He carried the heavy bag on his shoulder."},
        {"word": "signature", "example": "Please leave your signature at the bottom of the form."},
        {"word": "sincerely", "example": "Yours sincerely, John Doe."},
        {"word": "sincere", "example": "His apology seemed sincere."},
        {"word": "soldier", "example": "The soldier served in the military for many years."},
        {"word": "stomach", "example": "I have a stomach ache."},
        {"word": "sufficient", "example": "Ensure there is sufficient evidence before making a decision."},
        {"word": "suggest", "example": "What do you suggest we do this weekend?"},
        {"word": "symbol", "example": "The heart is a symbol of love."},
        {"word": "system", "example": "The solar system consists of the Sun and its orbiting planets."},
        {"word": "temperature", "example": "The temperature outside is very cold today."},
        {"word": "thorough", "example": "He completed a thorough review of the document."},
        {"word": "twelfth", "example": "Today is her twelfth birthday."},
        {"word": "variety", "example": "The store offers a variety of fruits and vegetables."},
        {"word": "vegetable", "example": "Carrots are my favorite vegetable."},
        {"word": "vehicle", "example": "The vehicle was parked outside the house."},
        {"word": "yacht", "example": "They spent the weekend sailing on their yacht."}
    ].reduce( (acc, val) => { acc[val.word] = val.example; return acc; }, {});

    let score = 0;
    let attempts = 0;
    const testSize = 5;
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
    

    document.getElementById('startTestButton').addEventListener('click', initializeTest);
    document.getElementById('submitAnswerButton').addEventListener('click', submitAnswer);
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        updateLearnedWordsDisplay();
        if (e.key === 'Enter' && !this.disabled) {
            submitAnswer();
        }
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