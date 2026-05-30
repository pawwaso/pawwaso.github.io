window.questions = [
  {
    "id": 1,
    "question": "Which of the following statements provides the BEST example of the 'AI Effect'?",
    "options": [
      "a) People lose their jobs as AI-based systems perform their roles cheaper and better",
      "b) Competitive computer games lose popularity as AI-based systems always win",
      "c) Rule-based expert systems for medical diagnosis are no longer considered to be AI",
      "d) People believe AI will take over the world, as shown in films"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. People in many occupations may lose their jobs to AI based systems, but this is simply progress, not the 'AI Effect'",
      "b": "Is not correct. For some computer games, AI-based systems can outplay humans, but there is little evidence of a drop-off in the popularity of such games",
      "c": "Is correct. The 'AI Effect' is defined as the change in the definition of AI as technology advances. Rule-based systems for medical diagnosis were popular examples of AI in the 1970s and 1980s but are often not considered AI today",
      "d": "Is not correct. The gullibility of cinema goers believing killer robots will take over the world is not the 'AI Effect'"
    }
  },
  {
    "id": 2,
    "question": "Which of the following options is NOT a technology used to implement AI?",
    "options": [
      "a) Support vector machine",
      "b) Decision tree",
      "c) Evolutionary reasoning",
      "d) Bayesian optimization"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Support vector machines are a form of machine learning",
      "b": "Is not correct. Decision trees are a form of machine learning",
      "c": "Is correct. There is no such AI technology as evolutionary reasoning. Such a term is occasionally used in discussions related to biological evolution-based rules were considered AI a few decades ago",
      "d": "Is not correct. Bayesian optimization is a form of machine learning"
    }
  },
  {
    "id": 3,
    "question": "Which of the following statements about the hardware used to implement AI-based systems is MOST likely to be CORRECT?",
    "options": [
      "a) The processors used to train a mobile recommendation system must be the same as the processors on the mobile phone",
      "b) Graphical processing units (GPUs) are a reasonable choice to implement an AI-based computer vision system",
      "c) Deep learning systems need to be trained, evaluated, and tested using AI-specific chips",
      "d) It is always best to choose processors with more bits to achieve sufficient accuracy for AI based systems"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The two activities of training a ML model and inference from that model are quite different so there is normally no reason that they should be performed on the same processors",
      "b": "Is correct. GPUs are designed for the parallel processing of images using thousands of cores, which is close to what is required for an AI based computer vision system that would most likely be implemented as a neural network",
      "c": "Is not correct. It is still possible to train, evaluate and test a simple deep-learning system on a PC with limited GPU support – so specific chips for AI are not needed, but they would be far faster",
      "d": "Is not correct. Many AI-based systems are not focused on exact calculations, but rather on probabilistic determinations and so the accuracy of processors with many bits is often unnecessary"
    }
  },
  {
    "id": 4,
    "question": "There are a number of good quality pre-trained models available in the market and you want to use one of them for an image-based classifier. You have decided to ask the provider of the model about the data used for training the model and its format.  Which of the following statements is the BEST example of a risk that you are trying to mitigate by asking these questions?",
    "options": [
      "a) Bad classification accuracy of the pre-trained models",
      "b) Differences in the data used to train the model and the operational data",
      "c) Performance efficiency issues of the pre-trained model",
      "d) Lack of explainability of the pre-trained model compared to that of a model trained by you"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The question mentions the good quality of the pre-trained model, so this risk should be negligible",
      "b": "Is correct. The data used to train the model should be similar to the data used for making the predictions",
      "c": "Is not correct. Performance does not appear to be an issue in this situation",
      "d": "Is not correct. Explainability does not appear to be an issue in this situation, nor can it be achieved by looking at the training data and its format"
    }
  },
  {
    "id": 5,
    "question": "Which of the following statements is MOST likely to be specifying a requirement for autonomy in an AI-based system?",
    "options": [
      "a) The system shall maintain a safe distance to other vehicles until the brake or accelerator is pushed by the driver",
      "b) The system shall learn the preferred style of response to emails by remotely monitoring the email traffic",
      "c) The system shall compare its predictions of house prices with actual selling prices to determine if it needs to be retrained",
      "d) It shall be possible to modify the system's behavior to work with different types of users in less than a day"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. This requirement defines the human interventions that define the end of the system working autonomously",
      "b": "Is not correct. This requirement is specifying a required function for how the system shall perform self-learning",
      "c": "Is not correct. This requirement is specifying how the system will manage concept drift, in this case most likely caused by the house market changing",
      "d": "Is not correct. This is specifying an adaptability requirement – the maximum time it should take to make a change to the system"
    }
  },
  {
    "id": 6,
    "question": "Which of the following statements about bias in AI-based systems is NOT correct?",
    "options": [
      "a) Bias may be caused by users of a book recommendation system making choices that deliberately cause the system to make poor suggestions",
      "b) Bias may be caused in the employee age of death prediction system by collecting the training data from a dataset of patients who are all retired",
      "c) Bias may be caused in the creditworthiness system by using training data obtained from those who own and use a credit card",
      "d) Bias may be caused in the navigation system by using a route planning algorithm that is too complex to be explained to typical users"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Bias can be caused by users deliberately poisoning the self-learning of an AI-based system",
      "b": "Is not correct. Bias can be caused when the training data does not correctly match those who the system will be applied to. For instance, employees will typically be younger than retired patients",
      "c": "Is not correct. Bias can be caused when the training data does not correctly match those who the system will be applied to. For instance, most people using credit cards are already considered creditworthy, which is a typical example of sample bias",
      "d": "Is correct. If the algorithm cannot be explained, then it lacks explainability, but that does not mean it is biased nor unbiased"
    }
  },
  {
    "id": 7,
    "question": "Which of the following is MOST likely to be an example of reward hacking?",
    "options": [
      "a) The programmer's assistant tool optimizes the code to provide reduced response times, while still ensuring that functional requirements are met",
      "b) An anesthetic supply device with a goal of keeping patients stable during surgery supplies too many doses and patients do not wake up as quickly as expected",
      "c) The third-party development organization paid their AI programmers based on the number of lines of code they write",
      "d) A type of AI used to play competitive computer games against humans that is focused on getting the highest score"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It appears that the tool is achieving its two goals with there being no detrimental effects, so this is unlikely to be 'reward hacking'",
      "b": "Is correct. This could be 'reward hacking' if the system achieves one goal to the detriment of others, in this case the need for patients to wake up",
      "c": "Is not correct. Reward hacking is not a form of paying AI developers",
      "d": "Is not correct. Some game-playing AI-based systems are driven by a reward function, but this is not known as 'reward hacking'"
    }
  },
  {
    "id": 9,
    "question": "Which of the following statements BEST describes classification and regression as part of supervised learning?",
    "options": [
      "a) Regression is checking that the ML model test results do not change when the same test data is executed",
      "b) Classification is the grouping of unlabeled data into separate classes",
      "c) Classification is the labelling of the data for training the ML model",
      "d) Regression is predicting the number of classes that are output by the ML model"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Regression in the context of supervised learning is generally when the ML model outputs a numeric result",
      "b": "Is correct. Classification is when input data to a ML model is classified into one of a few predefined classes",
      "c": "Is not correct. Training data needs to be labelled for training in supervised learning, but this activity is not known as classification. It is simply labelling",
      "d": "Is not correct. Regression is when the output from the ML model is numeric, but the output is not a number of classes"
    }
  },
  {
    "id": 10,
    "question": "Which of the following options BEST describes an example of reinforcement learning?",
    "options": [
      "a) The mobile game app updates its feedback, response timing and the number of user options it provides based on how much the players spend",
      "b) The language translation app searches the internet to find text provided in multiple languages to improve its translation function",
      "c) The factory quality control system uses video cameras and audio analysis to identify manufactured items that are faulty based on monitoring a human quality control operative",
      "d) The software component test prediction system uses a range of quality measures to identify which components are likely to contain the most defects"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The amount spent can be considered the reward function for this system, with the system changing its behavior to increase the amount spent",
      "b": "Is not correct. The app is using text in what can be considered a source language and a 'correct' translation of this source. Therefore, it is relying on a form of supervised learning with no reward function mentioned",
      "c": "Is not correct. The system is using the human quality control operative as a form of 'gold' standard and so is relying on a form of supervised learning",
      "d": "Is not correct. There is no suggestion that any reward function is used, instead it is most likely that the prediction system bases its determination of defects on past experience. Therefore, it is probably also relying on a supervised learning system"
    }
  },
  {
    "id": 11,
    "question": "You have been asked for your opinion on the ML approach to be used for a new system that is part of the traffic management for a SMART city.  The idea is that the new system will control the traffic lights in the city to ensure traffic flows easily through and around the city.  Which of the following approaches do you expect MOST likely to succeed?",
    "options": [
      "a) Unsupervised learning that is based on identifying clusters around the city where the traffic density is higher than average",
      "b) A supervised learning regression solution based on thousands of journeys labelled with both journey length and duration",
      "c) Reinforcement learning that is based on a reward function that penalizes solutions that result in higher levels of traffic congestion",
      "d) A supervised learning classification solution that is based on drivers and passengers submitting their favorite routes for traversing the city"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. It should be possible for the unsupervised learning system to identify areas that are congested, but this alone will not provide the solution",
      "b": "Is not correct. A regression solution is unlikely to provide us with what we want as the predicted speed of individual journeys will not provide an overall solution to citywide congestion",
      "c": "Is correct. A continually improving reinforcement learning system with a reward function based on lower levels of congestion as a measure of success is valid for this type of system",
      "d": "Is not correct. This solution is dependent on volunteers submitting subjective opinions that will most likely result in a solution that changes back and forth as the system adopts favorite routes that then become congested"
    }
  },
  {
    "id": 12,
    "question": "When performing testing of a trained model, an ML engineer found that the model was highly accurate when evaluated with validation data but that it performed poorly with independent test data.  Which of the following options is MOST likely to cause this situation?",
    "options": [
      "a) Underfitting",
      "b) Concept drift",
      "c) Overfitting",
      "d) Poor acceptance criteria"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The model performs well on validation data, so it is not a case of underfitting",
      "b": "Is not correct. Concept drift refers to changes after the model training and validation stage",
      "c": "Is correct. The bad performance on test data and good on validation data suggests overfitting",
      "d": "Is not correct. Poor acceptance criteria should be consistent with different sets of data, so are unlikely to lead to a difference between the test results with validation data and independent test data"
    }
  },
  {
    "id": 13,
    "question": "Which of the following is an example of a challenge that is likely to be encountered in the course of developing and testing an ML solution?",
    "options": [
      "a) Data anonymization operations typically require knowledge of various ML algorithms",
      "b) The data used might be unstructured data",
      "c) A large percentage of the budget gets spent just in data preparation",
      "d) The data pipeline scalability is a challenge when training the model"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data anonymization operations do not require knowledge of ML algorithms",
      "b": "Is not correct. Unstructured data is not a challenge. Images, audio, free-flowing text are all examples of unstructured data",
      "c": "Is correct. Up to 36% of ML workflow effort may be spent in data preparation",
      "d": "Is not correct. Scalability typically is a requirement at deployment, rather than when training"
    }
  },
  {
    "id": 14,
    "question": "The data scientist has complained that the model cannot be trained with one particular algorithm, although other algorithms work with the same training data.  Which of the following options is the MOST likely reason for this?",
    "options": [
      "a) Wrong data",
      "b) Missing data",
      "c) Badly labelled data",
      "d) Insufficient data"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Since models based on some learning algorithms can be trained with the data but not one particular algorithm, it indicates that the data is correct",
      "b": "Is not correct. Since models based on some learning algorithms can be trained with the data but not one particular algorithm, it indicates that there is no missing data",
      "c": "Is not correct. Since models based on some learning algorithms can be trained with the data but not one particular algorithm, it indicates that the data is correctly labelled",
      "d": "Is correct. Since models based on some learning algorithms can be trained with the data. However, if it does not work for one particular algorithm, it is MOST likely to be that the quantity of the data that is not sufficient for that particular algorithm"
    }
  },
  {
    "id": 15,
    "question": "DataSure is a start-up with a product that promises to improve the quality of ML models. DataSure claim that this improvement comes from checking if the data has been labeled correctly.  Which of the following defects is MOST likely to have been prevented by using this product?",
    "options": [
      "a) The model will have security vulnerabilities",
      "b) The model will have poor accuracy",
      "c) The model will not fulfill its intended function",
      "d) The model will produce biased outputs"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data privacy and security issues are not being handled. Hence the product is not going to prevent security issues",
      "b": "Is correct. Mislabeled data results in reduced accuracy of the ML model",
      "c": "Is not correct. A model not being fit for purpose arises from incorrect or unfair data, not mislabeled data",
      "d": "Is not correct. A biased model results from incomplete data, unbalanced data, unfair data, data lacking diversity, or duplicate data, rather than from mislabeled data"
    }
  },
  {
    "id": 16,
    "question": "An ML engineer, upon finding insufficient training data, is rotating labeled images to create additional training data.  Which of the following approaches to labeling is being applied in this above example?",
    "options": [
      "a) Crowdsourcing",
      "b) Augmentation",
      "c) AI-based labeling",
      "d) Outsourcing"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Crowdsourcing is when you use a large number of people to provide some work. In this case only one person is performing the task",
      "b": "Is correct. Augmentation is being performed here by transforming existing labelled data",
      "c": "Is not correct. AI is not being used for labeling of the data",
      "d": "Is not correct. The ML engineer has not outsourced the task to a third party"
    }
  },
  {
    "id": 18,
    "question": "ThermalSpace is a solution provider that helps thermal power plants to optimize their power output. Their solution is based on an ML model created using past data with clearly marked output. The model helps determine the amount of electricity to be generated at a given time of the day.  To determine the quality of the model using ML functional performance metrics, which of the following metrics is MOST likely to be used?",
    "options": [
      "a) R-squared",
      "b) Precision",
      "c) Recall",
      "d) False Positives"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. It is a supervised regression problem because the model outputs a continuous value, the amount of electricity to be generated, which uses the R-Squared or MSE/RMSE metric",
      "b": "Is not correct. This is a metric for classification",
      "c": "Is not correct. This is a metric for classification",
      "d": "Is not correct. This is a metric for classification"
    }
  },
  {
    "id": 19,
    "question": "KnowYourPet is an app utilizing ML to determine whether a pet is hungry or not. It is understood that a dog is likely to be not hungry most of the time, as reflected in the training data. If the dog is mis-diagnosed as hungry then it may lead to overfeeding of the dog and this could lead to serious health issues.  Which of the following metrics would you choose for determining the suitability of the model under test?",
    "options": [
      "a) Accuracy",
      "b) Precision",
      "c) Recall",
      "d) F1-score"
    ],
    "correct_answer": "B",
    "k_level": "K4",
    "points": "2",
    "justification": {
      "a": "Is not correct. Accuracy is not useful when there is an imbalance in the expected classes and the not hungry class dominates in this case",
      "b": "Is correct. Precision should be used because the cost of false-positives (overfeeding the dog) is high (serious health issues)",
      "c": "Is not correct. Recall is useful when the positives should not be missed. In this case, precision is also important (see b) and hence recall alone is not very useful. F1-score is a better choice",
      "d": "Is not correct. F1-score is useful when there is an imbalance in the expected classes and when precision and recall are similarly important, but in this case precision appears to be far more important than recall"
    }
  },
  {
    "id": 20,
    "question": "Which of the following options BEST describes a deep neural net?",
    "options": [
      "a) It is comprised of a hierarchical structure of neurons with the lowest (deepest) neurons making most of the decisions",
      "b) It is comprised of connected neurons where each neuron has an associated bias and each connection has an associated weight",
      "c) It is made up several layers with each layer (except input and output layers) connected to each other layer and errors are propagated backwards through the network",
      "d) It is made up of layers of neurons, each of which generates an activation value based on the other neurons in the same layer"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A neural network does not have a hierarchical structure",
      "b": "Is correct. As with the human brain, an artificial neural network is comprised of connected neurons. To perform its calculation of an activation value, each neuron is assigned a bias and each connection is assigned a weight",
      "c": "Is not correct. A neural network is made up of several layers and errors are propagated backwards through the network, but the layers of a neural network are only connected to the next layers (not each other layer)",
      "d": "Is not correct. A neural network is made up of layers of neurons, but the activation value is based on the neurons in the preceding layer (not the same layer)"
    }
  },
  {
    "id": 21,
    "question": "Which of the following statements CORRECTLY describes a test coverage measure for neural networks?",
    "options": [
      "a) Value change coverage is based on individual neurons being seen to affect the overall output of the neural network",
      "b) Threshold coverage is based on neurons outputting an activation value greater than a pre set value between zero and one",
      "c) Neuron coverage is a measure of the proportion of neurons that are activated at any time during the testing",
      "d) Sign change coverage measures the coverage of neurons that output both positive, negative and zero activation values"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Value change coverage is a measure of the proportion of neurons activated where their activation values differ by more than a preset change amount. It is not concerned with the overall output of the neural network",
      "b": "Is correct. Threshold coverage measures the proportion of neurons activated during testing with a value greater than a preset threshold value",
      "c": "Is not correct. All neurons are potentially 'activated' each time a neural network is 'run', however the values output by the neurons change, which is what is measured by neuron coverage (coverage achieved by a value greater than zero)",
      "d": "Is not correct. Sign change coverage is a measure of the proportion of neurons activated with both positive and negative activation values, but not zero activation values"
    }
  },
  {
    "id": 22,
    "question": "Which of the following requirements for an AI-based system is MOST likely to cause a significant challenge in testing?",
    "options": [
      "a) The system shall be more accurate than the system it is replacing",
      "b) The AI component in the system shall have 100% accuracy",
      "c) A human operator should be able to override the system in 1 second",
      "d) The system shall mimic the human emotions of a typical game player"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. This is a specific requirement with a test oracle, so should not usually cause a testing challenge",
      "b": "Is not correct. This may be a difficult requirement to achieve but should not create a testing challenge",
      "c": "Is not correct. This is a testable requirement",
      "d": "Is correct. This requirement is extremely complex to test without defining all human emotions and how the system might mimic them"
    }
  },
  {
    "id": 23,
    "question": "Which of the following is a factor associated with the test data that can make the testing of AI based systems difficult?",
    "options": [
      "a) Sourcing big data with high velocity",
      "b) Sourcing data from a single source",
      "c) Sourcing data separately from the data scientists",
      "d) Sourcing data from public websites"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. Sourcing data for AI systems that use large quantities of high-velocity data can be difficult",
      "b": "Is not correct. Sourcing consistent data from multiple sources can be difficult",
      "c": "Is not correct. Sourcing data separately is good practice as it prevents common failures with the data scientists",
      "d": "Is not correct. Sourcing data from public websites is straightforward"
    }
  },
  {
    "id": 24,
    "question": "Why would the accuracy of human decisions be considered in testing as well as the accuracy of AI-based systems?",
    "options": [
      "a) Intuitive human decisions can be made faster than a corresponding AI-based system in some situations",
      "b) Unethical decisions can be made by humans as well as AI-based systems",
      "c) The accuracy of human decisions is not relevant to testing AI-based systems",
      "d) Human decisions may be of lower quality when they have been recommended by an AI based system"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Speed of decision making is not related to accuracy",
      "b": "Is not correct. The ethical choices made by humans are not related to testing AI-based systems",
      "c": "Is not correct. The accuracy of human decisions is relevant as systems may make recommendations that humans approve or review",
      "d": "Is correct. Human decisions supported by recommendations by AI-based systems may be of lower quality than human decisions without recommendations from a system, and this should be considered in testing"
    }
  },
  {
    "id": 26,
    "question": "Which of the following statements BEST describes a testing challenge that specifically applies to a self-learning system?",
    "options": [
      "a) The system requires regular retraining and therefore requires regular testing",
      "b) The system is regularly released which means regression testing is required",
      "c) The system changes in such a way that tests that previously passed can fail",
      "d) The system requires a human operator, who is also required for testing"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A system that requires regular retraining cannot be described as self-learning",
      "b": "Is not correct. A system that needs to be regularly released cannot be described as self-learning as it requires frequent releases to adapt to change",
      "c": "Is correct. Tests on a system that makes changes to itself may start to fail, even if they previously passed",
      "d": "Is not correct. A system that requires a human operator is unlikely to be self-learning"
    }
  },
  {
    "id": 27,
    "question": "Which of the following is NOT likely to be required to test a system for bias?",
    "options": [
      "a) Involving selected users that are known to be biased",
      "b) Measuring how changes in test inputs change test outputs",
      "c) Observing how production outputs correlate to production inputs",
      "d) Obtaining additional data from other sources"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Users that exhibit bias are not required to test a system for bias because they do not help to determine whether the behavior of the system is biased",
      "b": "Is not correct. Measuring how test inputs change test outputs is important when testing for bias as it can show how the system is biased towards or against particular inputs",
      "c": "Is not correct. Measuring how production inputs change production outputs is important when testing for bias because different results might be seen in production",
      "d": "Is not correct. Obtaining external data sources can be essential when testing for bias in case the bias is based on 'hidden' variables"
    }
  },
  {
    "id": 28,
    "question": "Which of the following statements BEST describes how system complexity can create challenges when testing an AI-based system?",
    "options": [
      "a) Testing for bias may require data that the team does not have",
      "b) Manual generation of white-box tests can be difficult",
      "c) Determining whether a system is ethical can be subjective",
      "d) It can be difficult to find representative data to train a model"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Bias does not usually relate to system complexity",
      "b": "Is correct. Understanding how the system works and creating enough tests to achieve effective coverage are challenges caused by the complexity of AI-based systems",
      "c": "Is not correct. Ethics is not usually related to AI-based system complexity",
      "d": "Is not correct. Difficulty finding representative data to train a model is not related to testing or AI-based system complexity"
    }
  },
  {
    "id": 30,
    "question": "An ML engineer is trying to find exploitable inputs and then use these inputs to retrain the models to make them immune to these inputs.  Which of the following options BEST describes the approach being used by the ML engineer?",
    "options": [
      "a) Validation",
      "b) Adversarial testing",
      "c) Data pipeline testing",
      "d) Scalability testing"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. This is not validation as the exploitable inputs are being found and retraining is being done using those inputs",
      "b": "Is correct. This is an example of adversarial testing",
      "c": "Is not correct. There are not any data pipelines that are being tested in this situation",
      "d": "Is not correct. No scalability tests are being performed in this example"
    }
  },
  {
    "id": 31,
    "question": "A test manager has to select test techniques to be used for testing autonomous vehicle software. There are a large number of environmental conditions (>50) that need to be considered for seven vehicle functions.  Which of the following test techniques is MOST likely to be used when testing the variety of vehicle functions (VF) in different environmental conditions (EC)?",
    "options": [
      "a) A/B testing based on the VF and EC parameters",
      "b) Combination testing of all the parameters of VF and EC",
      "c) Pairwise testing of the relevant values of VF and EC",
      "d) Back-to-back testing of relevant VF and EC values"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A/B testing is not useful for combinatorial testing",
      "b": "Is not correct. All combinations would be almost impossible to do in practice, resulting from the near infinite number of potential combinations",
      "c": "Is correct. Pairwise testing is best suited to reduce the number of combinations without sacrificing defect detection too much",
      "d": "Is not correct. Back-to-back testing is not useful for combinatorial testing"
    }
  },
  {
    "id": 32,
    "question": "A test manager decides to have a non-AI system with similar functionality to the AI based system under test (SUT) built to support system testing.  Which of the following statements is most likely to be CORRECT?",
    "options": [
      "a) The test manager has chosen back-to-back testing because it helps solve the test oracle problem by using a pseudo-oracle",
      "b) The test manager has chosen A/B testing because it helps solve the test oracle problem by using a pseudo-oracle",
      "c) The test manager has chosen back-to-back testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle",
      "d) The test manager has chosen A/B testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. It is an example of back-to-back testing where the non-AI system is used as a pseudo-oracle",
      "b": "Is not correct. With A/B testing, we use a variant of the SUT to compare with the SUT",
      "c": "Is not correct. The resources and non-functional characteristics of the pseudo-oracle and the SUT are likely to be different, hence the alternate system cannot be used for non-functional testing",
      "d": "Is not correct. It is an example of back-to-back testing and also the resources and non-functional characteristics of the pseudo-oracle and the SUT are likely to be different"
    }
  },
  {
    "id": 34,
    "question": "System testing of an AI-based system is being planned. It has been suggested that exploratory testing is used in addition to scripted test techniques.  Which of the following scenarios is MOST likely to be an example of exploratory testing being performed?",
    "options": [
      "a) Training data is visualized using tools to look at various aspects of the data",
      "b) Tests written using equivalence partitioning during the previous test cycle are being run",
      "c) The Google 'ML test checklist' is being used",
      "d) ML functional performance metrics are being calculated"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. This is Exploratory Data Analysis which is an exploratory method",
      "b": "Is not correct. This is scripted testing",
      "c": "Is not correct. This is checklist-based testing",
      "d": "Is not correct. Calculating ML functional performance metrics is not exploratory testing"
    }
  },
  {
    "id": 36,
    "question": "Which one of the following statements is an example of a difference between a test environment for AI-based systems and a test environment for conventional systems?",
    "options": [
      "a) Test environments for AI-based systems may require some mechanism to determine how a particular decision is made",
      "b) Test environments for AI-based systems need simulators and virtual environments whereas conventional systems do not need these",
      "c) Test environments for AI-based systems need large amounts of data, whereas conventional systems do not need large amount of data",
      "d) GPUs are required for test environments for AI-based systems whereas conventional systems do not need these"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Explainability mechanism may need to be provided for AI environments",
      "b": "Is not correct. Simulators and virtual environments are often required for conventional systems",
      "c": "Is not correct. Large amount of data may be required for conventional systems, as well",
      "d": "Is not correct. GPUs may be required for many other systems as well, for example, games"
    }
  },
  {
    "id": 37,
    "question": "In which of the following situations would AI be MOST useful when categorizing new defects?",
    "options": [
      "a) A small number of defects requires categorization on a new application",
      "b) A large number of defects is reported on a small application",
      "c) Minimal data is provided in typical defect reports",
      "d) A new development team needs to know the most appropriate developer to fix a defect"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Where a small number of defects requires categorization and there is no historical data, AI would not have training data to be used. Genetic algorithms and neural networks can be used for test generation, and even be combined. Clustering produces results applicable to test generation",
      "b": "Is correct. Where a large number of defects is reported on a small application there is most likely to be benefit and opportunity to identify duplicates",
      "c": "Is not correct. Where minimal data is provided in the defect reports, the usefulness of the tool will be lower, as less data will be available to the algorithm",
      "d": "Is not correct. For AI to recommend developers to fix defects it would need to be based on historical data. However, because a new development team is taking over, any recommendations would be inaccurate until historical data is available"
    }
  },
  {
    "id": 38,
    "question": "Which of the following is an AI tool MOST likely to use as the basis for generating functional test cases?",
    "options": [
      "a) A test charter",
      "b) A picture of the system as a flow chart",
      "c) Web server logs",
      "d) Crash reports"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A test charter provides a focus for exploratory testing, and it rarely leads to the generation of test cases, even if an AI-based tool could interpret it",
      "b": "Is not correct. A flow chart could be used to generate tests, but it needs to be machine readable, rather than simply a picture",
      "c": "Is correct. Web server logs may reflect production use of the system and provide a way for AI to generate tests",
      "d": "Is not correct. Crash reports are unlikely to be used as they would describe unexpected failures rather than the functions performed by the application"
    }
  },
  {
    "id": 39,
    "question": "Which of the following options CORRECTLY states how an AI-based tool can perform optimization of regression test suites?",
    "options": [
      "a) By analyzing false positive test results",
      "b) By analyzing information from previous testing activities",
      "c) By using genetic algorithms to create new test cases",
      "d) By updating the expected results to counter concept drift"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The goal of regression testing optimization is to reduce the size, prioritize or augment a test suite, not to reduce false positives",
      "b": "Is correct. Optimization of regression test suites is performed by analyzing information on previous test executions",
      "c": "Is not correct. Per section 11.4 of the syllabus, regression test optimization is typically performed using previous test execution data. Using genetic algorithms to create new tests is unlikely to achieve the goal of optimizing the regression test suite",
      "d": "Is not correct. It is important to consider regression testing and concept drift together, however per section 11.4 concept drift is not related to regression test optimization using AI"
    }
  },
  {
    "id": 40,
    "question": "Which of the following options CORRECTLY states how an AI-based tool can perform defect prediction?",
    "options": [
      "a) Using natural language to ask developers where they predict defects will occur",
      "b) By analyzing the causes of defects raised on a similar code base",
      "c) By analyzing false positive defects",
      "d) Scanning code to identify defects using rules."
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. While natural language processing is an AI application, it is not used for defect prediction",
      "b": "Is correct. Defect prediction is performed by looking for correlations between code/process/people measures and defects on the same or a similar code base",
      "c": "Is not correct. The goal of defect prediction is not to identify defects with a false positive result. To analyze them would have little value",
      "d": "Is not correct. Defect prediction does not involve scanning of code using rules. This is static analysis"
    }
  },
  {
    "id": 41,
    "question": "Which of the following statements about AI is MOST likely to be CORRECT?",
    "options": [
      "a) An autonomous robot that can act as a worker in a house, shop or office is an example of general AI",
      "b) A robot exhibiting similar skill levels as a human is considered to have achieved singularity",
      "c) AI-based systems that support a range of test management functions are considered to possess general AI",
      "d) An AI-based system that cannot access the internet is said to exhibit narrow AI"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. General AI exhibits intelligent behavior comparable to a human and an autonomous robot that has a wide enough range of skills to perform as a worker in quite different environments is likely to be general AI",
      "b": "Is not correct. Singularity is that point when AI has surpassed humans – not when they are at similar levels",
      "c": "Is not correct. Performing test management would be considered by most as a single specialized set of tasks and would be classed as narrow AI",
      "d": "Is not correct. Narrow AI is being able to perform a single specialized task; it is not relevant whether the AI has access to the internet or not"
    }
  },
  {
    "id": 42,
    "question": "Which of the following statements is MOST likely to be describing a conventional system (as opposed to an AI-based system)?",
    "options": [
      "a) This system assigns customers into groups, based on their historical buying patterns",
      "b) This system controls the braking of the car dependent on its speed",
      "c) This system taught itself to recognize different words by listening to recordings",
      "d) This system detects anomalies from its experience of seeing anomalies in many X-rays"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. This system appears to be describing clustering of customers as would be performed by an unsupervised learning system; therefore, it is likely to be AI-based",
      "b": "Is correct. There is no evidence that this system implements AI",
      "c": "Is not correct. This system appears to have programmed itself by listening to recordings; therefore, it is likely to be AI-based",
      "d": "Is not correct. This system appears to be describing a form of supervised learning based on anomalies in X-rays; therefore, it is likely to be AI-based"
    }
  },
  {
    "id": 43,
    "question": "Which of the following options is NOT a framework used to develop AI-based software?",
    "options": [
      "a) scikit-learn",
      "b) CNTK",
      "c) MxNet",
      "d) EZPy-AI"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. This is a free software machine learning library for the Python programming language",
      "b": "Is not correct. This is the Microsoft Cognitive Toolkit (CNTK), an open-source deep-learning toolkit",
      "c": "Is not correct. This is a deep-learning open-source framework used by Amazon for AWS",
      "d": "Is correct. There is currently no AI development framework with this name"
    }
  },
  {
    "id": 44,
    "question": "Which of the following statements is MOST likely to be describing a system that includes the use of AI as a Service (AIaaS)?",
    "options": [
      "a) The image classifier identifies defects in the gyroscope casings produced by the company and was built using a transfer learning approach so that it is of high accuracy",
      "b) The underwater AI-based vehicle steering system uses a third-party obstacle avoidance component based on decision trees and Bayesian optimization",
      "c) The contract checker uses an exclusive algorithm for determining levels of legal liability, but the pricing part of the contract is separately checked by a generic contract pricing AI component",
      "d) The car rental pricing system is built using AI to support a demand-based algorithm and is hosted in the cloud and made available to all of the company's car rental offices"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The image classifier seems to be built for a highly specific problem area and is unlikely to be made widely available as AIaaS",
      "b": "Is not correct. Although the obstacle avoidance system is provided by a third party, it is highly likely to be embedded within the vehicle and it also appears to be a specialist component, so it is unlikely to be AIaaS",
      "c": "Is correct. The exclusive algorithm cannot be AIaaS, however the pricing part is generic and could well be provided as AIaaS",
      "d": "Is not correct. The described situation suggests that the system is made available across the web, but only internally to their own car rental offices, so it does not appear to be AIaaS"
    }
  },
  {
    "id": 45,
    "question": "Which of the following options is the MOST likely use of a regulatory standard/regulation for an AI based system?",
    "options": [
      "a) Use of ISO/PAS 21448 (SOTIF) for an unmanned autonomous submarine",
      "b) Use of GDPR for a bank loan decision-making system",
      "c) Use of ISO 26262 for a fully self-driving car",
      "d) Use of GDPR for a drone collision-avoidance system"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. SOTIF is for road vehicles, not submarines",
      "b": "Is correct. A bank loan decision-making system will work with personal data and this is covered by GDPR",
      "c": "Is not correct. A fully self-driving car is likely to include non-deterministic systems, which are not allowed by ISO 26262",
      "d": "Is not correct. Drone collision systems are unlikely to include any personal data, which is the focus of GDPR"
    }
  },
  {
    "id": 46,
    "question": "Which of the following statements about flexibility and adaptability is MOST likely to be CORRECT?",
    "options": [
      "a) Adaptability is important in unsupervised learning as it allows the ML model to learn from data without labels",
      "b) Flexibility is important in supervised learning as it allows the ML model to recognize meaning even when data is poorly labelled",
      "c) Adaptability is important in reinforcement learning systems as such systems must adapt themselves to optimize their reward function",
      "d) Flexibility is important in self-learning systems as it allows them to adapt themselves to unexpected changes in their environment"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. In unsupervised learning the system is expected to learn from unlabeled data and adaptability as a characteristic is associated with a system being changed rather than changing itself",
      "b": "Is not correct. Supervised learning is dependent on labelled data, but flexibility is not a characteristic associated with reading poorly labelled data",
      "c": "Is not correct. Reinforcement learning systems are expected to optimize the reward function, and adaptability as a characteristic is associated with a system that can be changed rather than a system that changes itself",
      "d": "Is correct. Flexibility is a characteristic associated with the ability of systems to be used in contexts outside the original requirements"
    }
  },
  {
    "id": 47,
    "question": "Which of the following statements about the evolution of AI-based systems is CORRECT?",
    "options": [
      "a) Self-learning AI-based systems that continue to work in the same operational environment are not expected to change their behavior",
      "b) Side effects are not a concern for AI-based systems that change themselves to cope with changes in their environment",
      "c) AI-based systems must change themselves to cope with changes in system requirements during development",
      "d) Self-learning systems that physically interact with people, need to be managed to ensure system changes are not dangerous"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Self-learning systems that work in the same operational environment could still optimize themselves and so change their behavior",
      "b": "Is not correct. AI-based systems that change themselves to adapt to changes in their environment could still cause negative side-effects",
      "c": "Is not correct. Evolution as a characteristic is not about system development, but about how an AI-based system changes after deployment in its operational environment",
      "d": "Is correct. If the self-learning system physically interacts with people, then any changes it makes to itself could potentially harm people"
    }
  },
  {
    "id": 49,
    "question": "Which of the following statements about the transparency, interpretability and explainability for AI based systems is MOST likely to be CORRECT?",
    "options": [
      "a) The search engine algorithm used for training students on search engine technology was selected as it was considered to be the most explainable",
      "b) The loan system was considered transparent as for each loan application it was clear to users how it decided whether to approve agree to the loan or not",
      "c) The doctors were happy with the level of interpretability of the rule-based oncology system as they could understand how the given rules were implemented in the system",
      "d) The drone operators were happy with the transparency of the control system as they felt that the system responded correctly to their instructions"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Understanding the underlying technology is considered to be interpretability rather than explainability",
      "b": "Is not correct. Understanding how the loan system made a decision is more likely to be explainability",
      "c": "Is correct. Understanding the technology underlying the oncology system is likely to be interpretability",
      "d": "Is not correct. The system responding correctly is simply referring to functional correctness – not transparency, interpretability or explainability"
    }
  },
  {
    "id": 50,
    "question": "Which of the following BEST describes the unsupervised approach to machine learning?",
    "options": [
      "a) Data and labels are analyzed to group them into clusters",
      "b) A system automatically learns by satisfying a fitness function",
      "c) A system teaches itself to meet objectives based on rewards",
      "d) Data are analyzed to identify patterns in the data"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. With unsupervised machine learning there are no labels",
      "b": "Is not correct. A reinforcement learning system uses a fitness function to drive its learning",
      "c": "Is not correct. A self-learning reinforcement system uses rewards to teach itself",
      "d": "Is correct. With unsupervised machine learning there are no labels and patterns are determined from the data itself"
    }
  },
  {
    "id": 52,
    "question": "Which of the following statements is LEAST likely to be used as a rationale for selecting an ML algorithm?",
    "options": [
      "a) The amount of memory available for training the translation system in the mobile device",
      "b) The maximum time allowed for retraining the embedded health monitoring system",
      "c) The number of measured characteristics used as the basis for a sports prediction system",
      "d) The number of expected clusters of customer types for a retail marketing system"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. It is unlikely that the ML algorithm will be trained on the mobile device",
      "b": "Is not correct. If the health monitoring system is embedded and needs to be retrained, we would likely set a maximum duration for this as the patient must either attend a facility for it to happen or be unmonitored while it is being done remotely",
      "c": "Is not correct. The number of features expected to be used by the model will affect the choice of model",
      "d": "Is not correct. Knowing the number of classes for clustering is a useful input when choosing the ML model"
    }
  },
  {
    "id": 53,
    "question": "Which of the following statements about the test dataset is CORRECT?",
    "options": [
      "a) The test dataset comes from a source totally different from the validation dataset",
      "b) The format of the test dataset is different from the format of the validation dataset",
      "c) The test dataset can be used as the validation dataset but not as the training dataset",
      "d) The test dataset should not be exposed to the model during the training process"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The test dataset typically comes from the same source as the validation dataset",
      "b": "Is not correct. The test dataset and the validation dataset should both have the same format",
      "c": "Is not correct. The test dataset is used for neither training nor for validation",
      "d": "Is correct. Incorporation of the test dataset in training will lead to bias in the evaluation of model"
    }
  },
  {
    "id": 54,
    "question": "Which of the following options would MOST likely be a reason for poor labeling of data?",
    "options": [
      "a) Insufficient data",
      "b) Synthetic data",
      "c) Translation errors",
      "d) Algorithm chosen for the ML model"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Having insufficient data doesn't determine the likelihood of data mislabeling",
      "b": "Is not correct. Synthetic data does not lead to poor labeling",
      "c": "Is correct. Translation errors may lead to correctly labeled data in one language being mislabeled in a second language",
      "d": "Is not correct. Data labeling is not related to the choice of ML algorithm"
    }
  },
  {
    "id": 55,
    "question": "An ML team asserts that the ML functional performance metrics based on validation data collected as part of training an ML model are sufficient for determining the quality of the system.  Which of the following statements is a valid reason to show that this may be INCORRECT?",
    "options": [
      "a) The ML functional performance metrics may not work well if the ground truth is not correct",
      "b) The ML functional performance metrics cannot be used for measuring quality as these are tool dependent",
      "c) Validation data is biased resulting in skewed functional performance measurements",
      "d) Data may need to be transformed prior to training the model, so the functional performance measurements do not reflect the quality of the model"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The model quality depends on labeling quality. Wrong labeling leads to wrong ground truth. For incorrectly labeled data the functional performance measurements may indicate a good quality model but it would be producing wrong outputs",
      "b": "Is not correct. Values of the ML functional performance metrics are not dependent on the tool used to measure them",
      "c": "Is not correct. Validation data may or may not have bias in it",
      "d": "Is not correct. Data transformation is often performed and it does not necessarily impact the quality of the model. Wrong transformations may result in data quality issues and subsequent model quality issues, but a general statement relating data transformation to poor model quality cannot be made"
    }
  },
  {
    "id": 56,
    "question": "Which of the following options regarding benchmark suites, BEST completes the following statement?",
    "options": [
      "a) ML benchmark suites help choose a particular model by indicating the time it takes to train",
      "b) ML benchmark suites help choose a particular model by indicating the time it takes to test",
      "c) ML benchmark suites help choose a particular model by indicating the time it takes to validate",
      "d) ML benchmark suites help choose a particular model by indicating the time it takes to deploy"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Benchmark suites indicate the training time",
      "b": "Is not correct. Benchmark suites do not indicate the test time",
      "c": "Is not correct. Benchmark suites do not indicate the validation time",
      "d": "Is not correct. Benchmark suites do not indicate the deployment time"
    }
  },
  {
    "id": 57,
    "question": "Which of the following test levels provides the BEST choice for performing bias-related testing?",
    "options": [
      "a) Component testing",
      "b) Input data testing",
      "c) System testing",
      "d) Model testing"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Component testing is applied to non-model components and is conventional testing",
      "b": "Is correct. Input data testing is performed for testing bias, among other things",
      "c": "Is not correct. While independent bias testing can be also done as part of system testing, ideally it should be done before training the model",
      "d": "Is not correct. Model testing is used to check that the model alone meets any specified requirements, e.g., ML functional performance criteria and non-functional criteria"
    }
  },
  {
    "id": 58,
    "question": "Which of the following statements about the documentation of AI components is CORRECT?",
    "options": [
      "a) Because non-functional requirements are not a part of the documentation of an AI component, non-functional testing cannot be performed",
      "b) White-box testing of the interaction of AI and non-AI components is not possible if the interfaces are a part of the documentation",
      "c) Checking for bias in the data is made possible by including the source of the data in the documentation",
      "d) Self-adapting AI systems require each change made by the system to be fully documented"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct because non-functional requirements are a part of the documentation",
      "b": "Is not correct because the documentation of interfaces supports the white-box testing of component interactions",
      "c": "Is correct because bias testing on the data on the basis of its source and meta-data is possible",
      "d": "Is not correct because self-adapting AI systems rarely provide the documentation of the changes they make to themselves"
    }
  },
  {
    "id": 59,
    "question": "An ecommerce application recommends products to the user on the basis of their purchase history and purchases being made by other people using the site, among other factors. As the tester, you have been asked to measure the current conversion rate of recommendations to compare with the original required conversion rate.  Which of the following is the MOST likely underlying reason for this request?",
    "options": [
      "a) AI effect",
      "b) Adversarial attacks",
      "c) Concept drift",
      "d) Lack of fairness"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct as AI effect refers to change in the perception of what is AI over time and not the accuracy of a given solution",
      "b": "Is not correct. An adversarial attack is where an attacker subtly perturbs valid inputs that are passed to the trained model to cause it to provide incorrect predictions. In this case the data is being gathered from the purchase history and not direct inputs from the users. Hence the chances of this being an adversarial attack are low",
      "c": "Is correct. This is an example of a model providing reduced accuracy because of changes in customer behavior",
      "d": "Is not correct. Fairness is using positively biased data for training which is not true in this case as we are dealing with a live system which was performing well in the past"
    }
  },
  {
    "id": 60,
    "question": "Which of the following options is MOST likely to be relevant when testing a system's autonomy?",
    "options": [
      "a) Testing over a sustained period of time",
      "b) Testing the accuracy of system predictions",
      "c) Testing how quickly the system can adapt",
      "d) Static analysis of training data"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. This is relevant to testing a system's autonomy because it may be required to test over a specific period of time to check how often the system requires intervention",
      "b": "Is not correct. A system can be autonomous and very inaccurate",
      "c": "Is not correct. A system can be autonomous and not adaptable",
      "d": "Is not correct. Static analysis of training data is unlikely to be related to testing for autonomy"
    }
  },
  {
    "id": 61,
    "question": "Which of the following statements demonstrates how non-deterministic systems can create challenges in testing?",
    "options": [
      "a) Non-deterministic systems produce a different result each time, normally preventing the generation of expected results",
      "b) Non-deterministic systems are difficult to test because they are not explainable, which hinders the investigation and fixing of defects",
      "c) A system that is given the same inputs and initial state may produce different outputs, so can require multiple test executions",
      "d) Non-deterministic systems are usually biased and require additional tests to allow this bias to be excluded from the results"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It is normally possible to specify expected results, but this may require the inclusion of a tolerance or making multiple test runs",
      "b": "Is not correct. Non-deterministic systems do not necessarily have explainability problems",
      "c": "Is correct. This is a valid description of a non-deterministic system, and, as a result tests may need to be run several times to give a statistically valid test result",
      "d": "Is not correct. There is no correlation between bias and non-deterministic systems"
    }
  },
  {
    "id": 62,
    "question": "When testing a deep neural network, which of the following characteristics can be evaluated without using dynamic testing?",
    "options": [
      "a) Explainability",
      "b) Transparency",
      "c) Automation bias",
      "d) Accuracy"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Methods for testing explainability of deep neural networks, which are complex to understand, require execution of the system",
      "b": "Is correct. Testing transparency does not require execution of the system under test, as it only requires comparing the documentation to the implementation",
      "c": "Is not correct. Automation bias requires execution to provide results, and determine how they are processed by users",
      "d": "Is not correct. Accuracy cannot be verified without executing the system under test"
    }
  },
  {
    "id": 63,
    "question": "Which of the following characteristics of an example AI-based system might cause a test oracle problem?",
    "options": [
      "a) It is not known where the training data was obtained",
      "b) The output of the system is a prediction for which the ground truth is unknown",
      "c) The system runs with no human intervention and is considered to be autonomous",
      "d) There is a lack of transparency into how the system was implemented"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data does not cause a test oracle problem because it does not mean it is difficult to determine the expected result",
      "b": "Is correct. If the ground truth of a predicted system is unknown, that is likely to cause a test oracle problem",
      "c": "Is not correct. Autonomy is unrelated to test oracles",
      "d": "Is not correct. Knowing how the system was implemented is not generally required to determine the expected result"
    }
  },
  {
    "id": 64,
    "question": "Which of the following statements is CORRECT with regards to A/B testing?",
    "options": [
      "a) A/B testing is also known as differential testing because two different programs are used for this type of testing",
      "b) A/B testing is mostly useful for testing simple ML models as it does not produce accurate results for complex models",
      "c) A/B testing requires multiple expected results from the same inputs to be compared to identify significant differences in tested models",
      "d) A/B testing is a good technique for writing test cases for various types of ML models, especially self-learning systemse"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Back-to-back testing, and not A/B testing, is known as differential testing",
      "b": "Is not correct. A/B testing can be used for both simple and complex ML models",
      "c": "Is correct. A/B testing requires well-defined acceptance criteria to choose between the two models being tested",
      "d": "Is not correct. A/B testing doesn't help in writing test cases"
    }
  },
  {
    "id": 65,
    "question": "Which of the following statements is LEAST likely to be an example of a benefit provided by virtual test environments in the testing of an AI-based system?",
    "options": [
      "a) A smart city application is tested in a virtual test environment to allow scenarios that very rarely happen (e.g., crowd control at a new year event) to be tested",
      "b) An AI-based money market trading system is tested in a virtual test environment as it would be impractical to test on real money markets due to the potential costs",
      "c) A smart fruit picker is tested in a virtual test environment to allow many picking scenarios to be run in an accelerated timeframe to check that fruit is not damaged",
      "d) An autonomous car is tested in a virtual test environment to allow potentially dangerous test scenarios to be run safelye"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Running rare scenarios in a virtual test environment is useful, especially when the cost of running the tests in the real world would be prohibitive",
      "b": "Is not correct. Running tests for a money market trading system on a virtual test environment is sensible as we could not run these tests on the real market due to the potential for losing money",
      "c": "Is correct. Running a fruit picker faster in a virtual environment will not help to determine if fruit is undamaged in real-time production because checking damage to fruit in the virtual environment would be far more difficult than checking on damage to real fruit in a real (non-virtual) environment",
      "d": "Is not correct. It is good practice to run dangerous test scenarios for an autonomous car in a virtual test environment on safety grounds"
    }
  },
  {
    "id": 66,
    "question": "It is possible to use an AI-assisted test automation tool to recognize objects through image processing, rather than using references to their location.  To which type of AI software engineering technology is this example MOST likely referring?",
    "options": [
      "a) Classification, Learning and Prediction",
      "b) Probabilistic Software Engineering",
      "c) Search-based Software Engineering",
      "d) Clustering"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Image recognition in the form of classification models is used to recognize objects in GUIs",
      "b": "Is not correct. Probabilistic software engineering can be used for estimating the probability of certain things occurring",
      "c": "Is not correct. Search-based software engineering techniques are used for reducing a large problem space. These may be useful for guessing where the image objects are located, but not recognizing them as images",
      "d": "Is not correct. Clustering is a type of algorithm, not a type of AI software engineering technology"
    }
  },
  {
    "id": 67,
    "question": "Which of the following statements is CORRECT with respect to visual testing?",
    "options": [
      "a) Visual testing makes use of object IDs to determine changes",
      "b) Visual testing uses images to do pixel-by-pixel comparisons",
      "c) Visual testing helps find overlapping user interface elements",
      "d) Visual testing fails when the screen layout changes"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Visual testing makes use of images and does not use object IDs",
      "b": "Is not correct. Visual testing makes use of images but does not perform pixel by pixel comparison. It uses AI to do the comparison",
      "c": "Is correct. Visual Testing can find overlapping user interface elements similar to a human tester",
      "d": "Is not correct. Visual testing works even when the layout changes"
    }
  },
  {
    "id": 68,
    "question": "What is MOST likely to be the current definition of AI, according to the syllabus?",
    "options": [
      "a) The capability of a system to be autonomous and recognize when to give control back to the user",
      "b) The capability of a system to self-learn without supervision",
      "c) The capability of a system to assess its environments and make decisions based on pre-learned behavior",
      "d) The capability of a system to acquire, process and apply knowledge"
    ],
    "correct_answer": "D",
    "points": "1",
    "k_level": "K2",
    "justification": {
      "a": "Incorrect. Autonomy and control handover are important but not the core definition of AI.",
      "b": "Incorrect. Self-learning without supervision refers to unsupervised learning, which is a subtype, not the full definition.",
      "c": "Incorrect. Assessing environments and acting on pre-learned behavior describes reactive systems but not AI broadly.",
      "d": "Correct. The syllabus defines AI as systems that can acquire, process, and apply knowledge to perform tasks."
    }
  },
  {
    "id": 69,
    "question": "Which of the following is MOST likely to be a challenge during testing?",
    "options": [
      "a) The system shall alert the user in a situation outside of the defined in the \"Operational Autonomy Scenarios\" document",
      "b) The system shall provide results within 2 seconds",
      "c) The system shall use a secure API for data exchange",
      "d) The system shall achieve at least 90% accuracy within a specified tolerance range"
    ],
    "correct_answer": "A",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Correct. Unexpected scenarios not defined in documentation are difficult to test and validate.",
      "b": "Incorrect. Performance metrics like timing are testable using standard tools.",
      "c": "Incorrect. API security can be verified through established test practices.",
      "d": "Incorrect. Accuracy thresholds can be validated with ground truth data."
    }
  },
  {
    "id": 70,
    "question": "Which of the following is MOST likely to be an example of reward hacking?",
    "options": [
      "a) A self-driving car prioritizes avoiding traffic over minimizing distance",
      "b) A chatbot focuses on generating the longest responses to increase user engagement metrics",
      "c) An AI model that prioritizes precision in medical diagnoses",
      "d) A search engine algorithm prioritizes speed over relevancy"
    ],
    "correct_answer": "B",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Incorrect. Avoiding traffic may align with intended goals, not reward exploitation.",
      "b": "Correct. Maximizing user engagement by generating long responses manipulates metrics rather than improving quality.",
      "c": "Incorrect. Prioritizing precision is aligned with legitimate goals.",
      "d": "Incorrect. Prioritizing speed over relevancy is a trade-off, not an exploit."
    }
  },
  {
    "id": 71,
    "question": "Connect the quality characteristics with their definitions:\n1 - Transparency\n2 - Interpretability\n3 - Explainability\n\nA - The understandability of the AI technology by various stakeholders\nB - The ease with which the algorithm can be determined\nC - The clarity with which the user interface displays options and controls for interacting with the AI system\nD - The ease with which users can determine how the AI-based system generates a particular answer\n\nWhich combination is correct?",
    "options": [
      "a) 1-C; 2-A; 3-B",
      "b) 1-B; 2-D; 3-A",
      "c) 1-C; 2-A; 3-D",
      "d) 1-B; 2-A; 3-D"
    ],
    "correct_answer": "D",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Incorrect. Transparency is about visibility of system internals, not UI clarity.",
      "b": "Incorrect. Interpretability is about understanding system logic, not transparency.",
      "c": "Incorrect. Explainability relates to how outcomes are explained, not UI design.",
      "d": "Correct. Transparency = B (algorithm clarity), Interpretability = A (stakeholder understanding), Explainability = D (reasoning for outputs)."
    }
  },
  {
    "id": 72,
    "question": "In which of the following stages of development bias is LEAST likely to occur in a model?",
    "options": [
      "a) Deployment",
      "b) Model testing",
      "c) Data collection",
      "d) Model training"
    ],
    "correct_answer": "B",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Incorrect. Deployment can introduce bias if assumptions change in real-world use.",
      "b": "Correct. Testing is meant to detect issues, not introduce them.",
      "c": "Incorrect. Data collection is a major source of bias (e.g. sampling bias).",
      "d": "Incorrect. Training on biased data propagates those biases."
    }
  },
  {
    "id": 73,
    "question": "Which of the following is UNLIKELY to cause reward hacking in a model trained by reinforcement learning?",
    "options": [
      "a) Inaccurate machine learning algorithm",
      "b) Poorly designed reward shaping",
      "c) Inaccurate human feedback",
      "d) Poorly designed final outcome"
    ],
    "correct_answer": "A",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Correct. The ML algorithm itself isn't the typical cause of reward hacking — it's the reward structure.",
      "b": "Incorrect. Poor reward shaping can lead to unintended behaviors.",
      "c": "Incorrect. Misleading feedback can cause the model to learn the wrong behaviors.",
      "d": "Incorrect. An ambiguous final goal may incentivize incorrect optimization."
    }
  },
  {
    "id": 74,
    "question": "Which example for 'AI Effect' is LEAST likely to be valid?",
    "options": [
      "a) LLMs are no longer considered truly intelligent as they just predict the next most likely word given a context",
      "b) Systems that do not use neural networks are no longer considered AI as they do not truly mimic how the human brain works",
      "c) Game AI is no longer considered truly intelligent, as behavior and speech patterns are pre-programmed using imperative language and random numbers",
      "d) Reinforcement learning Agent is no longer considered intelligent as it 'hacks' the task and performs actions which were not intended by the programmer in order to receive a reward"
    ],
    "correct_answer": "D",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Incorrect. This reflects a real phenomenon where successful AI is considered 'just software'.",
      "b": "Incorrect. Some people do dismiss non-neural approaches, which fits the AI Effect.",
      "c": "Incorrect. Game AI using simple logic being seen as non-AI aligns with the concept.",
      "d": "Correct. Reward hacking is a testing/failure issue, not a reason to deny the system is intelligent."
    }
  },
  {
    "id": 75,
    "question": "Which statement is true?",
    "options": [
      "a) Narrow AI is a system that is programmed to carry out a specific task and weak AI is a system that performs poorly on its specific task",
      "b) General AI is considered already accomplished, LLMs being the first general AI systems",
      "c) General AI can perform generally as good as a human on various tasks",
      "d) Narrow AI can work only with limited context, otherwise it will provide inaccurate results"
    ],
    "correct_answer": "C",
    "points": "1",
    "k_level": "*",
    "justification": {
      "a": "Incorrect. 'Weak AI' is synonymous with Narrow AI, which can still be very capable—it does not imply poor performance.",
      "b": "Incorrect. LLMs are powerful but still classified as Narrow AI because they lack general cognitive abilities.",
      "c": "Correct. General AI (AGI) refers to a system capable of performing any intellectual task that a human can do.",
      "d": "Incorrect. Limited context does not necessarily lead to incorrect outputs if the AI is well-trained for that domain."
    }
  },
  {
    "id": 76,
    "question": "Which of the following is MOST relevant when integrating a Deep Neural Network (DNN) into a system, with a focus on compressibility and efficiency?",
    "options": [
      "a) Quantify the network scalability",
      "b) Evaluate model performance against resource usage to ensure balance",
      "c) Validate the automatic update mechanism",
      "d) Analyze the impact of network depth on the test results"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Scalability analysis is useful but doesn’t directly relate to compression or network depth.",
      "b": "Incorrect. While balancing performance and resources is essential, it’s broader than the focus on depth and efficiency.",
      "c": "Incorrect. Update mechanisms are part of maintainability, not compression or network design.",
      "d": "Correct. Network depth is directly tied to both representational capacity and computational efficiency in DNNs."
    }
  },
  {
    "id": 77,
    "question": "Which of the following statements MOST accurately describes the impact of increasing the depth of a Deep Neural Network (DNN) on its ability to recognize complex patterns in data?",
    "options": [
      "a) Enables the network to learn more complex features at various levels",
      "b) Reduces the need for large training datasets",
      "c) Improves model interpretability",
      "d) Increases depth, improving efficiency in handling large datasets"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Increasing depth improves hierarchical feature extraction and model accuracy (to a point).",
      "b": "Incorrect. More complex models often require more—not less—training data.",
      "c": "Incorrect. Deeper models reduce interpretability due to added abstraction layers.",
      "d": "Incorrect. Efficiency may decrease with depth unless offset by architectural optimizations."
    }
  },
  {
    "id": 78,
    "question": "Which of the following is MOST relevant when comparing metamorphic testing to back-to-back testing in the context of self-learning systems?",
    "options": [
      "a) Back-to-back testing is more efficient due to the evolving nature of the output",
      "b) Back-to-back testing is always preferable because it is straightforward",
      "c) Metamorphic testing is universally better",
      "d) Metamorphic testing is preferable because of its capacity to validate modified outputs"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Back-to-back testing compares results but fails with evolving systems due to non-determinism.",
      "b": "Incorrect. It is not always more efficient—output variability hinders direct comparisons.",
      "c": "Incorrect. Metamorphic testing isn’t universally better; it depends on the use case.",
      "d": "Correct. Metamorphic testing is ideal for validating self-learning systems with expected behavior patterns."
    }
  },
  {
    "id": 79,
    "question": "Which of the following is MOST likely to describe a system that includes the use of AI as a Service (AIaaS)?",
    "options": [
      "a) The inventory tracking system uses a rule-based engine in the cloud to reorder parts when thresholds are met, based on pre-defined logic",
      "b) The customer billing platform is a cloud-hosted solution that applies fixed pricing rules configured through an admin interface",
      "c) The product recommendation engine is integrated via a cloud API and learns user preferences over time using collaborative filtering",
      "d) The web analytics dashboard service aggregates clickstream data and displays KPIs based on deterministic event tracking"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Rule-based systems lack learning capability and do not constitute AIaaS.",
      "b": "Incorrect. Fixed pricing rules are deterministic, not adaptive AI behaviors.",
      "c": "Correct. Adaptive APIs like collaborative filtering exemplify AIaaS by learning from user behavior.",
      "d": "Incorrect. Static dashboards may use data but don’t involve AI or learning."
    }
  },
  {
    "id": 80,
    "question": "Which of the following software services is MOST likely to be using AI as a Service (AIaaS)?",
    "options": [
      "a) A cloud-based accounting platform that automates invoice generation and applies tax rules based on configured settings.",
      "b) An online project management tool that assigns tasks and tracks deadlines based on user input and team schedules.",
      "c) A cloud-hosted customer support ticketing system that categorizes requests using pre-defined tags and escalation rules.",
      "d) A language translation service offered via a cloud API that improves over time using neural machine translation models"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Rule-based systems are static and not AI-driven.",
      "b": "Incorrect. Basic scheduling is not adaptive unless explicitly machine-learned.",
      "c": "Incorrect. Pre-defined tagging lacks the learning feedback loop of AI systems.",
      "d": "Correct. Neural machine translation adapts to data patterns and improves over time, matching AIaaS characteristics."
    }
  },
  {
    "id": 81,
    "question": "Which of the following statements is not true about contracts for AIaaS?",
    "options": [
      "a) Typically defines ML functional performance metrics because of legal constraints, as the users must know how much they can trust the predictions",
      "b) Rarely defines ML functional performance metrics such as accuracy",
      "c) Typically covers an uptime for the service (e.g., 99,9%), due to the fact that a service is technically offered, not a product",
      "d) Typically includes service-level agreement that defines availability and security commitments"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Legal contracts often omit model accuracy due to probabilistic and changing nature of ML outcomes.",
      "b": "Incorrect. This is a true statement, not a reason for avoiding accuracy commitments.",
      "c": "Incorrect. Uptime guarantees are common and expected in service agreements.",
      "d": "Incorrect. Security and availability SLAs are routinely included in contracts."
    }
  },
  {
    "id": 82,
    "question": "A company decides to use a pre-trained model for an image-based classifier. Which risk is BEST mitigated with such a decision?",
    "options": [
      "a) The risk of developing a model that does not meet the acceptance criteria",
      "b) The risk of selecting the wrong machine learning technology for the task",
      "c) The risk of developing a model that gives biased and unfair recommendations",
      "d) The risk of consuming significant resources with no guarantee of success"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Pre-trained models still need evaluation against acceptance criteria.",
      "b": "Incorrect. Choosing an unsuitable model architecture can still introduce project risks.",
      "c": "Incorrect. Bias may persist even in pre-trained models, especially if training data was biased.",
      "d": "Correct. Reusing a pre-trained model reduces development effort and project risk."
    }
  },
  {
    "id": 83,
    "question": "Of the following strategies for model development, which is LEAST likely to be useful?",
    "options": [
      "a) Using the publicly available ImageNet dataset to train an image classifier",
      "b) Using OpenAI API for the new chatbot",
      "c) Using a pre-trained model as it is, by embedding it in the system",
      "d) Modifying a pre-trained model to perform a second, different requirement"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. ImageNet is commonly used for training and benchmarking vision models.",
      "b": "Correct. Using a general-purpose API without tuning can lead to poor results in specific domains.",
      "c": "Incorrect. Using embedded pre-trained models is often acceptable if validated.",
      "d": "Incorrect. Modifying and repurposing models is a core transfer learning strategy."
    }
  },
  {
    "id": 84,
    "question": "Which of the following statements about transfer learning is MOST likely to be correct?",
    "options": [
      "a) It is used only on deep neural networks",
      "b) The effectiveness highly depends on the similarity between the function performed by the original model and the one required by the new model",
      "c) It can only be applied when source and target tasks are identical",
      "d) Transfer learning eliminates the need for any training data in the target domain"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Transfer learning is common for many ML types, not just DNNs.",
      "b": "Correct. The effectiveness of transfer learning depends on similarity between source and target domains.",
      "c": "Incorrect. Tasks don’t need to be identical—just related.",
      "d": "Incorrect. A small amount of labeled data in the new domain is typically still needed."
    }
  },
  {
    "id": 85,
    "question": "For an e-commerce application a machine learning model has been developed. It predicts loss of customers based on shopping behavior and customer feedback. Lately the accuracy has decreased. Which is the most likely issue?",
    "options": [
      "a) Reinforcement learning was needed instead of supervised learning as the model needs to adapt to its environment",
      "b) The classification algorithm used is inherently unsuitable for the task",
      "c) The model was trained on insufficient amount of data and is underfitted",
      "d) There was a concept drift and because of it the model needs retraining"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Reinforcement learning may not solve performance drops from concept drift.",
      "b": "Incorrect. The model may have been suitable initially but failed due to changing data.",
      "c": "Incorrect. Underfitting would show poor performance from the beginning, not after good initial results.",
      "d": "Correct. Concept drift occurs when data distribution changes over time, degrading model accuracy."
    }
  },
  {
    "id": 86,
    "question": "When testing an AI-based system, comparing pairwise testing and exhaustive testing, which statement is true?",
    "options": [
      "a) Pairwise selects combinations, reducing the number of tests needed",
      "b) Both methods are equally efficient",
      "c) Pairwise is less efficient, because it could miss critical interactions",
      "d) Exhaustive testing is quicker through comprehensive automation"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Pairwise testing is efficient for finding interaction bugs with fewer test cases than exhaustive testing.",
      "b": "Incorrect. Exhaustive testing is rarely practical due to combinatorial explosion.",
      "c": "Incorrect. Pairwise testing is practical and widely used in software testing.",
      "d": "Incorrect. Automated tools can speed up pairwise testing significantly."
    }
  },
  {
    "id": 87,
    "question": "An AI tool is being considered for regression test suite optimization. Which statement is true?",
    "options": [
      "a) It can lengthen the cycle due to the inherent complexity of AI",
      "b) It will cause developers to rely less on testing and more on the tool",
      "c) It increases the likelihood of defect introduction",
      "d) It can shorten the cycle"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. AI helps optimize test execution and analysis, reducing—not prolonging—test cycles.",
      "b": "Incorrect. AI enhances testing strategies but doesn't eliminate the need for human involvement.",
      "c": "Incorrect. AI doesn't introduce defects when used responsibly and correctly.",
      "d": "Correct. AI can optimize test suites by identifying redundant or low-value cases."
    }
  },
  {
    "id": 88,
    "question": "An AI-based system that will control the traffic flow is being developed. The testing performed began with unit tests, integration tests, and in the end real-world scenario testing was performed in a controlled environment. The System needs to adapt to unpredictable traffic conditions and integrate with various data sources and information. Which of the following is a correct statement regarding the testing performed?",
    "options": [
      "a) The approach may overlook continuous learning",
      "b) Concentrating on unit and integration testing is advised, and performing adaptability and scalability testing post-deployment in the operational environment",
      "c) The approach ensures each phase is tested, preparing it for the complexities of real-world operation",
      "d) Focusing on controlled real-world scenarios may miss subtleties in data source variability and integration challenges with legacy control systems"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Proper data representation is necessary but doesn't address real-world dynamics.",
      "b": "Incorrect. Deferring adaptability testing post-deployment increases production risk.",
      "c": "Incorrect. Testing phases individually may miss system integration issues.",
      "d": "Correct. Self-learning systems should be tested in realistic, variable environments to ensure safe adaptation."
    }
  },
  {
    "id": 89,
    "question": "Which of the following statements about the hardware used to implement AI-based systems is MOST likely to be INCORRECT?",
    "options": [
      "a) To achieve higher accuracy, processors with more bits should be used, but this approach will result in longer inference time",
      "b) Hardware intended for AI is suitable for edge computing and it is under development",
      "c) Hardware used specifically for AI is offered by Google as a service",
      "d) Neuromorphic processors do not use the traditional von Neumann architecture, but loosely mimic brain neurons"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. Simply increasing word size (e.g., 32-bit to 64-bit) doesn't directly improve AI model accuracy and can increase inference time.",
      "b": "Incorrect. Edge devices increasingly support AI-specific hardware like NPUs.",
      "c": "Incorrect. Google offers specialized AI hardware like TPUs as cloud services.",
      "d": "Incorrect. Neuromorphic processors are explicitly designed to diverge from von Neumann architecture."
    }
  },
  {
    "id": 90,
    "question": "To run a small-scale AI model on a PC, which hardware is most suitable?",
    "options": ["a) CPUs", "b) GPUs", "c) NPUs", "d) TPUs"],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. CPUs are general-purpose and not optimal for parallel AI workloads.",
      "b": "Correct. GPUs are well-suited for AI due to massive parallelism and are widely available for local experimentation.",
      "c": "Incorrect. NPUs are emerging but not yet common in personal devices.",
      "d": "Incorrect. TPUs are mainly available in cloud platforms, not personal PCs."
    }
  },
  {
    "id": 91,
    "question": "Which of the following hardware accelerators is MOST commonly offered as a cloud-based service for AI workloads?",
    "options": [
      "a) Application-Specific Integrated Circuits",
      "b) Tensor Processing Units",
      "c) Neural Processing Units",
      "d) System on a Chip"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. ASICs are rarely exposed as general-purpose cloud services due to their inflexibility.",
      "b": "Correct. TPUs are widely used in cloud AI services and are optimized for deep learning tasks.",
      "c": "Incorrect. NPUs are used more in edge and mobile, not dominant in cloud yet.",
      "d": "Incorrect. SoCs (System-on-Chip) are integration platforms, not standalone AI accelerators."
    }
  },
  {
    "id": 92,
    "question": "Match the quality characteristics with their description:\n1 – the ability of the system to be used in situations that were not anticipated\n2 – the ability of the system to change in response to changing external constraints\n3 – the behavior of achieving a specified goal by a different method than anticipated\n4 – the ease with which the system can be modified for new situations\n\nA – adaptability\nB – reward hacking\nC – flexibility\nD – evolution\nE – autonomy\n\nWhich combination is correct?",
    "options": [
      "a) 1-A; 2-E; 3-B; 4-D",
      "b) 1-A; 2-D; 3-E; 4-C",
      "c) 1-C; 2-D; 3-B; 4-A",
      "d) 1-C; 2-E; 3-B; 4-A"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. 2-E is wrong because evolution (not autonomy) refers to changing in response to external constraints. 4-D is also incorrect; 'ease of modification' aligns with adaptability, not evolution.",
      "b": "Incorrect. 3-E is incorrect—achieving goals by unintended means is called reward hacking, not autonomy. 4-C is correct, but the other mappings are inconsistent.",
      "c": "Correct. 1-C (flexibility is the ability to operate in unanticipated situations), 2-D (evolution is adaptation to changing external constraints), 3-B (reward hacking is goal achievement by unexpected means), 4-A (adaptability refers to ease of modification) are all correct.",
      "d": "Incorrect. 2-E is incorrect as evolution—not autonomy—is the response to external change. The rest are plausible but this mismatch makes it invalid."
    }
  },
  {
    "id": 93,
    "question": "Which of the following statements about the different types of autonomy is INCORRECT?",
    "options": [
      "a) Data transformation autonomy is the degree to which the model can transform new data to meet defined standards",
      "b) Model parameter autonomy is the degree to which AI can update its parameters",
      "c) Data update autonomy is the degree to which an AI can determine when to update data",
      "d) Decision autonomy is the degree to which an AI can decide it's own goals"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. Data transformation autonomy refers to the AI’s ability to transform incoming data to fit its processing needs, which aligns with the definition.",
      "b": "Correct. Model parameter autonomy is correctly described—it involves the AI system adjusting its own internal parameters such as weights.",
      "c": "Correct. Data update autonomy allows the AI to determine when it needs to update its data inputs or sources, which fits the syllabus.",
      "d": "Incorrect. Decision autonomy refers to the ability to make decisions **within predefined goals**, not to define its **own goals**. AI systems do not currently possess the autonomy to invent or set their own goals independently."
    }
  },
  {
    "id": 94,
    "question": "An ML system is analyzing POS data and finds insufficient customer data from its internal sources for decision making. It searches a list of other data sources and adds the found information to its dataset. Example of which autonomy is this:",
    "options": [
      "a) Data source autonomy",
      "b) Data modification autonomy",
      "c) Data update autonomy",
      "d) Model parameter autonomy"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Data source autonomy refers to the AI system’s ability to autonomously identify and incorporate external data sources when internal data is insufficient. This matches the described behavior.",
      "b": "Incorrect. Data modification autonomy refers to the AI’s ability to modify data representations or structure, not to find and add new sources.",
      "c": "Incorrect. Data update autonomy is about deciding when to refresh or re-fetch existing data—not sourcing entirely new datasets.",
      "d": "Incorrect. Model parameter autonomy concerns updating internal parameters like weights or biases, which is unrelated to sourcing data."
    }
  },
  {
    "id": 95,
    "question": "If an AI starts with neural network as a technology, but to perform better in a given task decides to switch to Random Decision Forest, which autonomy does it MOST likely have?",
    "options": [
      "a) Model technology autonomy",
      "b) Model type autonomy",
      "c) Model objective autonomy",
      "d) Model decision autonomy"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Model technology autonomy refers to the ability to change the underlying hardware or software platform—not switching between model types like neural networks and decision forests.",
      "b": "Correct. Model type autonomy is the ability of an AI system to switch between different model types (e.g., neural network to decision forest) to improve performance, which directly matches the scenario.",
      "c": "Incorrect. Model objective autonomy refers to the AI’s capacity to redefine or choose its own objectives, which is not the case here.",
      "d": "Incorrect. Model decision autonomy refers to making decisions using a given model, not changing the model type itself."
    }
  },
  {
    "id": 96,
    "question": "Which of the following can cause a model to have inappropriate bias?",
    "options": [
      "a) Racial bias",
      "b) Algorithmic bias",
      "c) Bias against age groups",
      "d) Unemployment bias"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Racial bias is an example of inappropriate bias in model outcomes, but it is not itself the root cause—it results from underlying algorithmic or data-related issues.",
      "b": "Correct. Algorithmic bias refers to systemic issues in the design, training, or decision logic of the model that lead to unfair outcomes. It is a root cause of inappropriate bias.",
      "c": "Incorrect. Bias against age groups is another manifestation of inappropriate bias, not its cause.",
      "d": "Incorrect. Unemployment bias describes a potential impact or expression of bias, not the technical or systemic cause within the model."
    }
  },
  {
    "id": 97,
    "question": "Which of the following hardware is specialized for AI?",
    "options": [
      "a) High-bandwidth memory",
      "b) General purpose CPUs",
      "c) ASICs",
      "d) Dynamic RAM"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. High-bandwidth memory (HBM) supports fast data access and is useful for AI, but it is not specifically specialized for AI—it is a memory component, not a processing unit.",
      "b": "Incorrect. General purpose CPUs can run AI workloads but are not optimized for them—they lack the parallel processing capabilities needed for efficient AI computation.",
      "c": "Correct. ASICs (Application-Specific Integrated Circuits) are hardware chips specifically designed for a particular AI task (e.g., Google's TPU), making them highly specialized for AI.",
      "d": "Incorrect. Dynamic RAM (DRAM) is a standard memory type used in computers and is not specialized for AI processing."
    }
  },
  {
    "id": 98,
    "question": "What is the purpose of keeping the validation set separate from the training set?",
    "options": [
      "a) To fine-tune model parameters and assess generalization without bias",
      "b) To verify the model's performance on completely unseen data",
      "c) To increase the accuracy of the training phase by providing more examples",
      "d) To reduce the training time for the machine learning model"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. The validation set is used to fine-tune hyperparameters and evaluate model generalization performance without contaminating the training process—ensuring unbiased tuning.",
      "b": "Incorrect. Evaluating performance on completely unseen data is the role of the test set, not the validation set.",
      "c": "Incorrect. The validation set is not used to train the model; adding it to training would prevent proper generalization assessment.",
      "d": "Incorrect. The validation set has no effect on training time; it is used to evaluate intermediate model performance during tuning."
    }
  },
  {
    "id": 99,
    "question": "What is the advantage of using LIME in testing explainability of machine learning models?",
    "options": [
      "a) It guarantees global interpretability for all types of models",
      "b) It improves model accuracy during training",
      "c) It provides possible reasons for individual predictions, even for black-box models",
      "d) It eliminates the need for a separate validation set"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. LIME does not offer global interpretability; it provides local explanations for individual predictions, especially for complex black-box models.",
      "b": "Incorrect. LIME is a post-hoc interpretability tool and does not impact model accuracy or training directly.",
      "c": "Correct. LIME (Local Interpretable Model-agnostic Explanations) explains individual predictions by approximating the model locally, even when the original model is a black box.",
      "d": "Incorrect. LIME does not affect data partitioning or eliminate the need for validation sets."
    }
  },
  {
    "id": 100,
    "question": "Which of the following best describes the effect of outliers and missing data in a machine learning dataset?",
    "options": [
      "a) Outliers enhance model robustness; missing data simplifies feature engineering",
      "b) Outliers distort model accuracy; missing data reduced data completion",
      "c) Outliers have no impact on model performance; missing data improves generalization",
      "d) Outliers and missing data are automatically handled by all ML algorithms"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Outliers often negatively affect model accuracy, especially for algorithms sensitive to distribution; missing data complicates, not simplifies, feature engineering.",
      "b": "Correct. Outliers can distort patterns learned by the model, and missing data hinders proper feature representation, requiring imputation or exclusion.",
      "c": "Incorrect. Outliers can significantly degrade model performance, and missing data typically reduces generalization unless handled carefully.",
      "d": "Incorrect. Many ML algorithms require explicit preprocessing; not all can automatically manage outliers or missing values without manual intervention."
    }
  },
  {
    "id": 101,
    "question": "During the development of a binary classification model, the goal is to minimize false positives (FP) while also keeping false negatives (FN) low. Which of the following is the most appropriate strategy?",
    "options": [
      "a) Decrease false positives",
      "b) Add a third category 'review'",
      "c) Retrain the model",
      "d) Decrease false negatives"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Minimizing false positives (FP) aligns directly with the stated goal, especially when FP have high cost (e.g., in medical or fraud detection contexts).",
      "b": "Incorrect. Adding a 'review' category introduces uncertainty and defers decision-making, but does not directly minimize FP or FN.",
      "c": "Incorrect. Retraining the model might help, but it’s a broad action—not a strategy targeted specifically at reducing FP.",
      "d": "Incorrect. Reducing false negatives (FN) contradicts the primary goal of minimizing false positives unless trade-offs are explicitly managed."
    }
  },
  {
    "id": 102,
    "question": "Which of the following is NOT a recommendation regarding the ethics of AI by the OECD?",
    "options": [
      "a) Misinformation and disinformation amplified by AI should be addressed",
      "b) Stakeholders should proactively engage in responsible stewardship in pursuit of protecting the environment",
      "c) AI systems should not be developed to operate with complete autonomy",
      "d) Meaningful information should be provided and there should be transparency of the AI systems"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. The OECD promotes addressing the risks of AI-driven misinformation and disinformation to support trustworthy AI.",
      "b": "Correct. Responsible stewardship, including protecting the environment, is aligned with the OECD’s AI principles under sustainability and benefit to humanity.",
      "c": "Incorrect. The OECD does not forbid AI systems from operating autonomously; instead, it emphasizes human-centered values, transparency, and accountability—even for autonomous systems.",
      "d": "Correct. The OECD recommends that AI systems provide meaningful information to ensure transparency and enable understanding of outcomes."
    }
  },
  {
    "id": 103,
    "question": "Which of the following is NOT an ML technique used to implement AI?",
    "options": [
      "a) Support vector machine",
      "b) Deductive classifiers",
      "c) Clustering algorithms",
      "d) Genetic algorithms"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Support Vector Machines (SVMs) are supervised machine learning algorithms commonly used for classification tasks.",
      "b": "Incorrect. Deductive classifiers are based on logic and symbolic reasoning, not on statistical learning, and are not categorized as ML techniques.",
      "c": "Correct. Clustering algorithms, such as k-means, are unsupervised ML techniques used to discover inherent groupings in data.",
      "d": "Correct. Genetic algorithms are heuristic search and optimization techniques inspired by natural selection, often used in machine learning tasks."
    }
  },
  {
    "id": 104,
    "question": "Which of the following is a reasoning technique used to implement AI?",
    "options": [
      "a) Decision tree",
      "b) Random forest",
      "c) Rule engine",
      "d) Logistic regression"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. A decision tree is a machine learning algorithm used for classification and regression, not a reasoning technique.",
      "b": "Incorrect. Random forest is an ensemble ML method that builds multiple decision trees, not a symbolic reasoning method.",
      "c": "Correct. A rule engine is a reasoning technique that uses if-then rules for decision-making, typical in symbolic AI.",
      "d": "Incorrect. Logistic regression is a statistical model used in supervised ML for binary classification."
    }
  },
  {
    "id": 105,
    "question": "Which of the following is not a framework for AI development?",
    "options": [
      "a) PyTorch",
      "b) Keras",
      "c) Apache Cognitive Toolkit",
      "d) Watson Studio"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. PyTorch is a popular open-source machine learning framework developed by Meta, widely used for deep learning applications.",
      "b": "Incorrect. Keras is an open-source deep learning API written in Python and capable of running on top of TensorFlow, Theano, or CNTK.",
      "c": "Correct. 'Apache Cognitive Toolkit' does not exist. The actual framework is Microsoft Cognitive Toolkit (CNTK), not affiliated with Apache.",
      "d": "Incorrect. Watson Studio is a cloud-based development environment from IBM for building and training AI models."
    }
  },
  {
    "id": 106,
    "question": "Which of the following is a high-level API and not a framework on its own?",
    "options": [
      "a) Keras",
      "b) Apache Cognitive Toolkit",
      "c) Hugging Face",
      "d) LangChain"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. Keras is a high-level neural networks API that runs on top of lower-level frameworks such as TensorFlow, Theano, or CNTK. It simplifies building and training deep learning models.",
      "b": "Incorrect. Microsoft Cognitive Toolkit (CNTK), often confused with 'Apache Cognitive Toolkit', is a full deep learning framework developed by Microsoft.",
      "c": "Incorrect. Hugging Face is a company that provides tools, libraries (like Transformers), and models for NLP, which include full frameworks and pipelines.",
      "d": "Incorrect. LangChain is a framework for developing applications powered by large language models (LLMs), integrating tools and memory."
    }
  },
  {
    "id": 107,
    "question": "Which of the following is a correct definition of Explainability?",
    "options": [
      "a) The ease with which the AI technology can be understood by the users",
      "b) The ease with which the AI tool's function can be explained",
      "c) The ease with which an algorithm can be explained",
      "d) The ease with which users can determine how the AI came to a particular result"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. While related to interpretability, this option is too broad and vague. It does not focus on the outcome or decision-making process of the AI system.",
      "b": "Incorrect. Explaining a tool’s function is more about documentation or user-friendliness, not the technical reasoning behind AI decisions.",
      "c": "Incorrect. This refers more to algorithm transparency or interpretability, not necessarily explainability as defined in AI ethics and testing.",
      "d": "Correct. Explainability is the ease with which users can determine how the AI came to a particular result, supporting transparency, trust, and accountability."
    }
  },
  {
    "id": 108,
    "question": "Which of the following is NOT a correct statement about classification?",
    "options": [
      "a) Multi-label classification predicts zero or more classes for each input",
      "b) The output is discrete",
      "c) Used especially for categorizing different types of customers for marketing",
      "d) Used when the input is to be classified into one of a few predefined classes"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. In multi-label classification, each input instance can be assigned multiple (zero or more) class labels, making this a valid statement.",
      "b": "Correct. Classification tasks have discrete output spaces—i.e., classes or categories—unlike regression tasks.",
      "c": "Incorrect. While classification can be used for marketing segmentation, this task is better described as clustering (an unsupervised learning technique), not classification.",
      "d": "Correct. A defining characteristic of classification is assigning inputs to one of a few predefined categories."
    }
  },
  {
    "id": 109,
    "question": "An AI system is being developed to control multiple machines in a warehouse. It will be able to autonomously identify and sort items, it will also inspect them and register them in a database. Which of the following techniques is most likely to be useful?",
    "options": [
      "a) Reinforcement learning",
      "b) Self-supervised learning",
      "c) Semi-supervised learning",
      "d) Unsupervised learning"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. Reinforcement learning is well-suited for environments where agents (like AI-controlled machines) must learn actions through trial and error to achieve specific goals, such as navigating and interacting with a warehouse.",
      "b": "Incorrect. Self-supervised learning is typically used for learning representations from unlabeled data, but it does not focus on sequential decision-making required for autonomous control.",
      "c": "Incorrect. Semi-supervised learning combines labeled and unlabeled data and is more relevant for classification tasks, not autonomous control and interaction in a dynamic environment.",
      "d": "Incorrect. Unsupervised learning is focused on finding patterns or groupings in data without labels and is not effective for learning optimal behaviors in sequential decision tasks like warehouse control."
    }
  },
  {
    "id": 110,
    "question": "What type of data is a CSV file?",
    "options": [
      "a) Structured",
      "b) Semi-structured",
      "c) Meta-structured",
      "d) Unstructured"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. While CSV files appear tabular, they lack an enforced schema and metadata, which distinguishes them from fully structured data like relational databases.",
      "b": "Correct. CSV files are considered semi-structured because they organize data in a consistent format (rows and columns) but without strict schema enforcement or embedded metadata.",
      "c": "Incorrect. 'Meta-structured' is not a standard data classification in data science or AI contexts.",
      "d": "Incorrect. Unstructured data refers to formats like text, images, or audio with no inherent organizational schema. CSV files clearly have a regular structure."
    }
  },
  {
    "id": 111,
    "question": "Which type of data is often used in web scraping and social media analysis?",
    "options": [
      "a) Structured",
      "b) Unstructured",
      "c) Hybrid-structured",
      "d) Semi-structured"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Structured data is highly organized, typically in relational databases with fixed schemas, and is not commonly the output of web scraping or social media mining.",
      "b": "Incorrect. While social media content like posts and comments may appear unstructured, most scraped data includes tags, fields, or partial formatting, making it semi-structured.",
      "c": "Incorrect. 'Hybrid-structured' is not a standard classification of data types in the context of AI or data analytics.",
      "d": "Correct. Semi-structured data, such as HTML pages or JSON from APIs, is typical in web scraping and social media analysis, as it contains organizational elements without a rigid schema."
    }
  },
  {
    "id": 112,
    "question": "Which is the most resource intensive stage of model development?",
    "options": [
      "a) Model training and tuning",
      "b) Model testing",
      "c) Model development",
      "d) Data preparation"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Model training and tuning are important, but often automated and less time-consuming compared to manual data collection, cleaning, labeling, and transformation.",
      "b": "Incorrect. Model testing typically involves running test datasets and evaluating metrics, which is not as resource-intensive as preparing quality training data.",
      "c": "Incorrect. Model development (e.g., coding model structure) is relatively quick compared to the extensive effort required for preparing and organizing the data.",
      "d": "Correct. Data preparation—including data acquisition, cleaning, transformation, and annotation—is typically the most resource-intensive and time-consuming stage in the machine learning lifecycle."
    }
  },
  {
    "id": 113,
    "question": "Which of the following is MOST relevant when testing an AI-based system in real-time, where the impact of false negatives (FN) and false positives (FP) is critical?",
    "options": [
      "a) Minimize false positives to reduce the risk of unnecessary actions",
      "b) Maximize detection rate to improve system responsiveness",
      "c) Focus on reducing false negatives at the expense of detection rate",
      "d) Prioritize computational efficiency over detection accuracy"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. While minimizing false positives is important, in real-time AI systems, missing critical events (false negatives) or delayed detection can be more harmful than unnecessary actions.",
      "b": "Correct. In real-time AI systems, maximizing detection rate ensures timely response, which is essential when both false positives and false negatives can have serious consequences.",
      "c": "Incorrect. Reducing false negatives is valuable, but doing so at the cost of detection rate may lead to slower or missed reactions in a real-time environment.",
      "d": "Incorrect. Computational efficiency matters, but accuracy—especially in terms of detecting events—is more critical in real-time, high-impact AI scenarios."
    }
  },
  {
    "id": 114,
    "question": "Which of the following is a critical consideration when selecting a pseudo-oracle for back-to-back testing (BTB)?",
    "options": [
      "a) Adaptability in logic update after requirements evaluation",
      "b) Variability of data source used for scenario simulation",
      "c) Efficiency in processing large data sets",
      "d) Consistency in the validation of outputs across multiple test cases"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. In back-to-back testing, a pseudo-oracle should be adaptable to changes in logic after evaluating requirements, as it must evolve alongside the system under test to remain valid and useful.",
      "b": "Incorrect. While data variability is useful in simulation testing, it is not a primary factor when selecting a pseudo-oracle for back-to-back comparison.",
      "c": "Incorrect. Processing efficiency is beneficial but secondary to correctness and adaptability when validating outputs using pseudo-oracles.",
      "d": "Incorrect. Although output consistency is important, it is a property being verified, not a selection criterion for the pseudo-oracle itself."
    }
  },
  {
    "id": 115,
    "question": "What consequences does overlooking the definition of metamorphic relations have on the efficiency of metamorphic testing in AI systems?",
    "options": [
      "a) It may lead to ambiguous or misleading test outcomes, reducing the testing efficiency",
      "b) The testing process may become slower",
      "c) It impacts the system's accuracy and reliability",
      "d) AI becomes self-aware faster"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. In metamorphic testing, clear and well-defined metamorphic relations are essential. Without them, test outcomes can become ambiguous or misleading, which directly reduces the effectiveness and efficiency of the testing process.",
      "b": "Incorrect. While inefficiencies may arise, the main issue is not speed but clarity and validity of test results.",
      "c": "Incorrect. Overlooking metamorphic relations affects test quality, not the inherent accuracy or reliability of the AI system itself.",
      "d": "Incorrect. The idea that AI becomes 'self-aware' is unrelated to metamorphic testing and is not grounded in actual AI testing methodologies."
    }
  },
  {
    "id": 116,
    "question": "When testing a self-learning system, which of the following strategies is MOST effective for ensuring that new learning updates do not negatively impact the system's performance or functionality?",
    "options": [
      "a) A/B automated regression testing to compare versions and ensure consistent performance",
      "b) Manual testing with a focus on exploring new behaviors",
      "c) Load testing to simulate system performance under stress without tracking model changes",
      "d) Model accuracy testing in isolation without considering overall system impact"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Correct. A/B automated regression testing is effective for comparing system behavior before and after updates in self-learning systems. It ensures consistent performance and detects regressions caused by new learning.",
      "b": "Incorrect. Manual testing may uncover some issues but is not scalable or reliable for consistently detecting regressions in evolving models.",
      "c": "Incorrect. Load testing evaluates system performance under stress but does not help track the functional impact of model updates.",
      "d": "Incorrect. Testing model accuracy in isolation ignores potential integration or performance issues at the system level after updates."
    }
  },
  {
    "id": 117,
    "question": "For an AI system used for self-driving cars, which of the following best describes the role of pairwise testing when selecting test cases from an enormous number of possible parameter combinations?",
    "options": [
      "a) Pairwise testing will increase the number of test cases, as it focuses on a wide range of parameter combinations without effectively reducing the test suite size",
      "b) Pairwise testing is not suitable for complex systems like self-driving cars due to the complexity and high-impact of their nature",
      "c) Pairwise testing can significantly reduce the number of test cases by focussing on the most likely parameter combinations that lead to defects",
      "d) Pairwise testing primarily helps in testing individual parameters in isolation without considering their interactions"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Pairwise testing reduces—not increases—the number of test cases by ensuring that all possible pairs of input parameter values are covered efficiently.",
      "b": "Incorrect. While self-driving systems are complex, pairwise testing remains applicable and useful for identifying interaction defects with a reduced set of test cases.",
      "c": "Correct. Pairwise testing is effective in reducing the number of test cases by ensuring that all pairs of parameter combinations are tested, which often catches most defects with fewer tests.",
      "d": "Incorrect. Pairwise testing focuses specifically on **interactions between pairs** of parameters, not on testing them in isolation."
    }
  },
  {
    "id": 118,
    "question": "In a regression-based machine learning model developed to estimate car resale values, the R-squared value was calculated to be 0.92. What does this indicate about the model?",
    "options": [
      "a) The model is overfitting the data",
      "b) It is a measure of how well the regression model fits the dependent variable",
      "c) The model has a 92% accuracy rate",
      "d) The residuals are normally distributed"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. A high R-squared value alone does not necessarily indicate overfitting. Overfitting relates to model performance on unseen data, which R-squared doesn't directly measure.",
      "b": "Correct. R-squared is a statistical measure that indicates the proportion of variance in the dependent variable explained by the regression model.",
      "c": "Incorrect. R-squared is not the same as accuracy. Accuracy applies to classification models, not regression.",
      "d": "Incorrect. R-squared does not assess the distribution of residuals; that would be evaluated using tests for normality or residual plots."
    }
  },
  {
    "id": 119,
    "question": "A machine learning team is using Mean Squared Error to evaluate a regression model predicting delivery times. Which of the following best describes the metric?",
    "options": [
      "a) It shows the proportion of variance in the dependent variable explained by the model",
      "b) It is used to determine the distribution of residuals in a classification model",
      "c) It measures the average squared difference between predicted and actual values",
      "d) It indicates the percentage of predictions that are exactly correct"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. That describes R-squared, not Mean Squared Error (MSE). R-squared explains variance; MSE measures prediction error.",
      "b": "Incorrect. MSE is a regression metric, not related to residual distribution or classification models.",
      "c": "Correct. MSE calculates the average of the squares of the differences between predicted and actual values, penalizing larger errors more heavily.",
      "d": "Incorrect. That describes accuracy, which applies to classification problems, not regression."
    }
  },
  {
    "id": 120,
    "question": "A model for categorizing different types of customers for marketing is being developed. Which of the following metrics BEST suits the intended purpose?",
    "options": [
      "a) Silhouette coefficient",
      "b) R-squared",
      "c) The receiver operating characteristic curve",
      "d) The area under the receiver operating characteristic curve"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. The Silhouette coefficient measures how similar an object is to its own cluster compared to other clusters, making it suitable for evaluating clustering quality in customer segmentation.",
      "b": "Incorrect. R-squared is a regression metric that measures variance explained by the model, not suitable for unsupervised clustering tasks.",
      "c": "Incorrect. The ROC curve is used for evaluating binary classification models, not clustering models.",
      "d": "Incorrect. AUC-ROC is a metric for classification performance, not applicable to unsupervised learning like clustering."
    }
  },
  {
    "id": 121,
    "question": "Given the following confusion matrix, which is the correct value for F1-score?\n\nConfusion Matrix:\n                | Actual Positive | Actual Negative\n---------------------------------------------------\nPredicted Positive |      43        |       24\nPredicted Negative |      12        |       13",
    "options": ["a) 1,03", "b) 0,35", "c) 0,76", "d) 0,69"],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. F1-score cannot be greater than 1.0; this value is mathematically invalid.",
      "b": "Incorrect. While possible, a score of 0.35 suggests poor precision and recall, which does not match the assumed confusion matrix.",
      "c": "Incorrect. 0.76 is close but not the best match based on the actual precision and recall values.",
      "d": "Correct. 0.69 is the accurate F1-score calculated using the harmonic mean of precision and recall derived from the confusion matrix."
    }
  },
  {
    "id": 122,
    "question": "Which of the following BEST describes the quality characteristic autonomy?",
    "options": [
      "a) The system has a set of rules for every scenario",
      "b) The system adjusts its actions based on real-time data analysis",
      "c) The system can self-diagnose",
      "d) The system alerts the user to make a decision in an unknown situation"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Having a fixed set of rules for all scenarios refers to rule-based systems, not autonomy. Autonomy deals with decision-making in unforeseen or uncertain conditions.",
      "b": "Incorrect. Adjusting actions based on data analysis reflects adaptivity or reactivity but does not fully capture the concept of autonomy in quality characteristics.",
      "c": "Incorrect. Self-diagnosis refers to self-monitoring or fault detection, which is more aligned with robustness or maintainability than autonomy.",
      "d": "Correct. Autonomy refers to the system’s ability to operate independently, including escalating decisions to a human when the situation is unclear or outside predefined bounds."
    }
  },
  {
    "id": 123,
    "question": "Which of the following characteristics of AI makes it MOST challenging to predict?",
    "options": [
      "a) Transparency",
      "b) Continuous learning",
      "c) Determinism",
      "d) Complexity"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Transparency, when present, actually helps in making AI behavior more predictable and explainable.",
      "b": "Correct. Continuous learning implies the model can change its behavior over time as it receives new data, making it harder to predict its future outputs or decisions.",
      "c": "Incorrect. Determinism would make a system’s behavior more predictable, not less.",
      "d": "Incorrect. While complexity adds to the challenge, it is the evolving nature of learning that introduces the greatest unpredictability."
    }
  },
  {
    "id": 124,
    "question": "Which of the following is a common source of bias in models?",
    "options": [
      "a) Feedback loop bias",
      "b) The data lacks diversity and represents narrow set of the population",
      "c) Using a variety of algorithms",
      "d) Regular updates"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Feedback loop bias is a type of bias that can amplify existing patterns, but it typically emerges after deployment, not as a common *source* during initial model development.",
      "b": "Correct. A common and well-known source of bias is training data that lacks diversity, leading the model to generalize poorly for underrepresented groups.",
      "c": "Incorrect. Using a variety of algorithms can actually help reduce bias by comparing outcomes across different modeling approaches.",
      "d": "Incorrect. Regular updates are generally intended to improve model performance and fairness, not to introduce bias."
    }
  },
  {
    "id": 125,
    "question": "In a classification model, which metric is most useful when the goal is to minimize false negatives (FN) without significantly increasing false positives (FP)?",
    "options": ["a) Precision", "b) Accuracy", "c) F1-score", "d) Recall"],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Incorrect. Precision focuses on reducing false positives but does not account for false negatives, making it insufficient when minimizing FN is important.",
      "b": "Incorrect. Accuracy can be misleading, especially in imbalanced datasets, and does not specifically help with minimizing FN or balancing FP/FN.",
      "c": "Correct. F1-score is the harmonic mean of precision and recall, making it suitable when both false negatives and false positives matter and need to be balanced.",
      "d": "Incorrect. Recall focuses on minimizing false negatives but does not consider the trade-off with false positives, which the F1-score does."
    }
  },
  {
    "id": 126,
    "question": "Which of the following best distinguishes Artificial General Intelligence (AGI) from Artificial Narrow Intelligence (ANI)?",
    "options": [
      "a) AGI can perform a wide variety of tasks without specific training, while ANI is designed to excel at a specific task",
      "b) AGI is limited to specific domains, whereas ANI has the ability to generalize across domains",
      "c) AGI can perform well on tasks involving deep learning, while ANI is better suited for rule-based systems",
      "d) AGI requires no data for learning, while ANI requires large amount of data to perform tasks"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Correct. AGI refers to a type of AI capable of learning and applying knowledge across a wide range of tasks, similar to human intelligence, whereas ANI is specialized for a single domain or task.",
      "b": "Incorrect. This reverses the characteristics; AGI generalizes across domains, while ANI is restricted to specific domains.",
      "c": "Incorrect. Both AGI and ANI can use deep learning or rule-based systems; this is not the key distinction between them.",
      "d": "Incorrect. Both AGI and ANI typically require data to learn; AGI is not exempt from data dependency."
    }
  },
  {
    "id": 127,
    "question": "Which of the following statements correctly describes different coverage measures for neural networks?",
    "options": [
      "a) Full neuron coverage requires that each neuron in the neural network achieves an activation value greater than a specified threshold",
      "b) Sign-sign coverage is similar as a concept to MC/DC coverage for imperative source code",
      "c) Sign-change coverage requires pairs of neurons to be exercised to see if the change of sign in the first neuron affects the sign of the second",
      "d) Sign-change coverage requires each neuron to achieve two activation values, where the difference between the two values produces either positive or negative number"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Incorrect. Full neuron coverage requires that each neuron is activated at least once (regardless of threshold), not necessarily achieving a specific activation value above a threshold.",
      "b": "Correct. Sign-sign coverage is inspired by Modified Condition/Decision Coverage (MC/DC) and ensures that changes in neuron activation signs impact decisions similarly to how conditions influence decisions in source code.",
      "c": "Incorrect. This describes pairwise neuron interaction but confuses it with sign-change coverage, which is about individual neurons switching activation signs under different inputs.",
      "d": "Incorrect. Sign-change coverage does not evaluate the arithmetic difference between two activations; it focuses on whether the sign of a neuron's activation changes between inputs."
    }
  },
  {
  "id": 8,
  "question": "Given the following attributes for an AI-based system (I–V):\n\nI.   Probabilistic  \nII.  Explicable  \nIII. Unfair  \nIV.  Non-deterministic  \nV.   Deterministic  \n\nWhich list of attributes below is likely to cause the MOST difficulties if the system is to be used as part of a safety-related system?",
  "options": {
    "a": "I, IV  ",
    "b": "II, IV",
    "c": "II, III, V",
    "d": "I, III, V"
  },
  "correct_answer": "a",
  "k_level": "K1",
  "points": "1",
  "justification": {
    "a": "Is correct. Considering the given attributes:\nI. Probabilistic – a definite problem for safety-related systems as this causes non-determinism\nII. Explicable – normally needed for safety-related systems\nIII. Unfair – not ideal, but sometimes unavoidable – and not a special problem for safety-related systems\nIV. Non-deterministic - a definite problem for safety-related systems\nV. Deterministic - normally needed for safety-related systems\nTherefore, I and IV are the attributes that are MOST problematic for safety-related systems.",
    "b": "Is not correct",
    "c": "Is not correct",
    "d": "Is not correct"
  }
},
{
  "id": 17,
  "question": "The confusion matrix for an image classifier is shown below.\n\n|    Actual Positive | Actual Negative\n--------------------------------------------------\nPredicted Positive  |      78       |       22\nPredicted Negative  |       6        |       14\n\nWhich of the following options represents the precision of the classifier?",
  "options": {
    "a": "20/120 * 100",
    "b": "78/120 * 100",
    "c": "78/100 * 100",
    "d": "22/100 * 100"
  },
  "correct_answer": "c",
  "k_level": "K3",
  "points": "2",
  "justification": {
    "a": "Is not correct. See option c for the correct formula and calculation",
    "b": "Is not correct. See option c for the correct formula and calculation",
    "c": "Is correct. The formula for Precision = TP/ (TP+FP) *100 = 78/(78+22) \n= 78/100 *100",
    "d": "Is not correct. See option c for the correct formula and calculation"
  }
},
{
  "id": 25,
  "question": "An ML-based toll charging solution determines the type of incoming vehicles from the images captured by a camera.  There are different types of cameras available and the solution provider claims to be able to use cameras of different resolutions. The images need to be in jpeg format with a size of 320X480 pixels for the purpose of training the model as well as for predicting the outcome. The model should be able to classify the vehicle types with certain desired high level of accuracy and should be tested against vulnerabilities. Each toll plaza will have its own complete system unconnected to any other system.  Which of the following types of testing are the MOST appropriate options for the tests you would choose for system testing? Select TWO options.",
  "options": {
    "a": "Testing for concept drift ",
    "b": "Adversarial testing",
    "c": "Scalability testing",
    "d": "Fairness testing",
    "e": "Data pipeline testing"
  },
  "correct_answer": [
    "b",
    "e"
  ],
  "k_level": "K4",
  "points": "2",
  "justification": {
    "a": "Is not correct. Concept drift is tested after deployment",
    "b": "Is correct. Adversarial testing is important because the requirements \nstate that the system should be tested against vulnerabilities",
    "c": "Is not correct. Scalability testing has not been mentioned as one of the \nrequirements. These are independent systems connected and are not connected to any other systems",
    "d": "Is not correct. Fairness is using positively biased data for training. Since there is no case of positive discrimination here, fairness testing is not relevant",
    "e": "Is correct. Data pipeline testing is required because the images can come in various formats and resolutions. For the model to be trained all images should have same format hence this testing is important "
  }
},
{
  "id": 29,
  "question": "An AI-based system is being used by the health ministry to identify vulnerable groups of patients, who will be provided with support and advice to help prevent them suffering future illnesses to which they may be susceptible. The results will also be shared with other government agencies and medical insurance companies.  The system is initially being trained on a large set of data collected by the health ministry from two surveys of 5,000 men over 50 years of age and 25,000 women over 30 years of age.  The system will continue to identify vulnerable patients by gathering information from publicly available social media. Which of the following attributes should be MOST carefully considered when specifying the objectives and acceptance criteria for the system? Select TWO options.",
  "options": {
    "a": "Adaptability",
    "b": "Bias",
    "c": "Explainability",
    "d": "Flexibility",
    "e": "Autonomy"
  },
  "correct_answer": [
    "b",
    "c"
  ],
  "k_level": "K4",
  "points": "2",
  "justification": {
    "a": "Is not correct",
    "b": "Is correct. Considering each of the attributes:\na) Adaptability - is the ability of the system to be modified (normally in order to continue to meet functional and non-functional requirements). There is no reason to believe the operational environment for the system will change much and so no reason to believe that the system will have to be changed\nb) Bias – the data being used for training is biased towards women (25,000 vs 5,000) and towards specific age groups, therefore bias needs to be carefully considered\nc) Explainability – the results may affect the identified vulnerable patients both medically and financially. They should be able to see why they have been labelled as susceptible so they can ensure they have been correctly chosen and as part of explainability requirements related to data privacy\nd) Flexibility - is the ability of a system to change its behavior, but there is no reason at this point to think this system will need to be used outside the initial specification and so it is not expected there will be a need to change its behavior\ne) Autonomy - is the ability of the system to work for sustained periods without human intervention. There is no reason to think that the system will have to work for sustained periods without intervention\n\nThus, bias and explainability are the two most important attributes for the given scenario",
    "c": "Is correct",
    "d": "Is not correct"
  }
},
{
  "id": 33,
  "question": "An AI-based mobile phone search system provides a list of phones that it believes are most suitable for the user based on its knowledge of the user's previous mobile phone usage and their specified preferences.\n\nGiven that metamorphic testing is being used with the following source test case:\n\nInputs                                | Outputs\n--------------------------------------------------------------\nSelected price range: $200–$300       | Recommended Phones:\n3D camera: Don’t care                 | SnapHappy_X1\nScreen size: mid to large             | SnapHappy_M2\nOS: Android or iOS                    | SnapHappy_M3\nBattery Life: Don’t care              | ClickNow_1000x\n                                      | ClickNow_1000xs\n\nAnd this test data for two corresponding follow-up test cases:\n\nInput T1\n-----------\nSelected price range: $200–$300\n3D camera: yes\nScreen size: mid to large\nOS: Android or iOS\nBattery Life: Don’t care\n\nInput T2\n-----------\nSelected price range: $200–$300\n3D camera: no\nScreen size: mid to large\nOS: Android or iOS\nBattery Life: Don’t care\n\nWhich of the following options is MOST likely to be a valid list of recommended phones for the follow-up test cases?",
  "options": {
    "a": "T1: SnapHappy_X1, SnapHappy_M2 \n T2: ClickNow_1000x, ClickNow_1000xs",
    "b": "T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs \n T2: SnapHappy_X1, ClickNow_1000x",
    "c": "T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs \n T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3",
    "c": "T1: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs \n T2: SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs"
  },
  "correct_answer": "b",
  "k_level": "K3",
  "points": "2",
  "justification": {
    "a": "Is not correct",
    "b": "Is correct. Follow-up test case T1 differs from the source test case by the change in requirements for a 3D camera; it is now more specific. A 3D camera must be included. So, that means the follow-up expected results can only include the original test results at most (the previously recommended phones with a 3D camera).\nFollow-up test case T2 also differs from the source test case by the change in requirements for a 3D camera; it is also more specific. No 3D camera should be included. So, that means the follow-up expected results can only include the original test results at most (the previously recommended phones without a 3D camera).\nAs T1 lists phones with a 3D camera, the remaining phones from the source test case must be those with no 3D camera – and so they should be in T2.\nTherefore, T1 and T2 combined should contain all the cameras from the source test case, but with no overlap between the two.",
    "c": "Is not correct",
    "d": "Is not correct"
  }
},
{
  "id": 35,
  "question": "LAIgal systems has an AI-based product for extracting relevant favorable judgements similar to a given legal case. This product is used by judges in the courts. Details of the current case are provided, and the system produces relevant judgements. The system needs to be safe from malicious inputs. A similar open-source product exists and is available.  Not having a suitable test oracle is a challenge when testing.  Which of the following test techniques should be selected to test the new version during system testing? Select TWO options.",
  "options": {
    "a": "A/B testing",
    "b": "Back-to-back testing",
    "c": "Adversarial testing",
    "d": "State transition testing",
    "e": "ML functional performance metrics calculation"
  },
  "correct_answer": [
    "b",
    "c"
  ],
  "k_level": "K4",
  "points": "2",
  "justification": {
    "a": "Is not correct. A/B testing is most useful when comparing two variants \nfor the purpose of deciding if the new variant is an improvement over \nthe older variant",
    "b": "Is correct. Back-to-back testing uses a similar product as a pseudo\noracle for testing",
    "c": "Is correct. Adversarial testing is important here as it being used for very \nimportant purpose and adversarial data can cause harm",
    "d": "Is not correct. While state transition testing might be useful, nothing in \nthe scenario suggests it; therefore, it is not the most relevant technique",
    "e": "Is not correct. This testing is appropriate at the model testing stage for classification problems. It is not appropriate at the system testing stage for non-classification problems"
  }
},
{
  "id": 51,
  "question": "Given the following descriptions:\n\nI.   Model performance is checked using validation data  \nII.  The origin of test data used to test the model is identified  \nIII. The tuned model is made ready for its target hardware  \nIV.  Test data are used to ensure the agreed ML functional performance criteria are met  \nV.   The model is created from source code  \nVI.  The critical data features are identified  \n\nWhich of the following options BEST matches the descriptions with the activities in the ML workflow?",
  "options": {
    "a": "III - Build & Compile Model / II - Prepare the Data / IV - Evaluate the Model",
    "b": "V - Build & Compile Model / II - Prepare the Data / I - Evaluate the Model",
    "c": "V - Build & Compile Model / VI - Prepare the Data / IV - Evaluate the Model",
    "d": "III - Build & Compile Model / VI - Prepare the Data / I - Evaluate the Model"
  },
  "correct_answer": "b",
  "k_level": "K2",
  "points": "1",
  "justification": {
    "a": "Is not correct",
    "b": "Is correct. Considering the given descriptions:\nI. Model performance is checked using validation data. This is carried out during model evaluation\nII. The origin of the test data used to test the model is identified. This is carried out as part of data preparation\nIII. The tuned model is made ready for its target hardware. This is carried out as part of deployment\nIV. Test data are used to ensure the agreed performance criteria are met. This is carried out as part of testing the model\nV. The model is created from source code. This is carried out as part of the build and compile model activity\nVI. The critical data features are identified. This is carried out as part of data preparation",
    "c": "Is not correct",
    "d": "Is not correct"
  }
},
{
  "id": 48,
  "question": "Which of the following examples of an AI-based system is LEAST likely to require special attention with regard to ethical issues?",
  "options": {
    "a": "A computer game that teaches children the benefits of democracy by challenging them to become president",
    "b": "An application that uses data available on social media to provide a trustworthiness rating for job applicants",
    "c": "An autonomous self-powered underwater marine mapping system to create a map of the seabed in international waters",
    "d": "A mobile app that monitors each employee's daily exercise and rewards them with health insurance benefits"
  },
  "correct_answer": "c",
  "k_level": "K2",
  "points": "1",
  "justification": {
    "a": "Is not correct. This game is aimed at children, a vulnerable group, and may give them an unfavorable view of democracy",
    "b": "Is not correct. The application may pick up private and/or biased information from social media, which adversely affects the job prospects of applicants",
    "c": "Is correct. The ethical principles of respect for human autonomy, prevention of harm, fairness and explicability are unlikely to be affected by an underwater marine mapping system",
    "d": "Is not correct. Such an app has the potential to be unfair to vulnerable groups, such as those with disabilities and it may also create unwanted pressure on employees"
  }
}
]