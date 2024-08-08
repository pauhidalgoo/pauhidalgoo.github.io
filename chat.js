let model;

const predefinedAnswers = [
    { question: "what things has pau done?", answer: `Pau has garnered extensive experience across a diverse array of Natural Language Processing (NLP) tasks, including

- **Named Entity Recognition (NER)**: Using a CRF Tagger with custom features, to identify PER, ORG, LOC and MISC tags (BIO, BIOW...). Also, more complex medical corpus like CADEC.
  
- **Word Embeddings**: Leveraging techniques like Word2Vec, FastText and RoBERTa to convert words into numerical vectors, capturing semantic meaning and context.

- **Language Identification**: Implementing models to detect the language of a given text, essential for multilingual applications, using character trigrams and different smoothing functions.

- **Transformers**: Finetuning models like RoBERTa for a task, and "recreating" GPT-2, models which have revolutionized NLP with their ability to handle complex language tasks through self-attention mechanisms.

- **Sentiment Analysis**: Trying different techniques to assess the emotions behind movie reviews or music lyrics.

- **Word Sense Disambiguation (WSD)**: Developing methods to determine the correct meaning of a word based on its context, enhancing the precision of language understanding.

- **RAG (Retrieval-Augmented Generation) Powered Applications**: Implementing state-of-the-art models (OpenAI's API, for example) that combine retrieval and generation techniques to improve the accuracy and relevance of generated responses in applications such as chatbots and search engines.

Pau's comprehensive experience in these areas underscores his knowledge and versatility in advancing NLP technologies.`},
    
    { question: "how do you handle NLP data preprocessing?", answer: `Data preprocessing is a crucial step in NLP to ensure that the input data is clean and suitable for modeling. Typical preprocessing steps include:

- **Tokenization**: Splitting text into individual words or tokens.
- **Normalization**: Converting text to a standard format, such as lowercasing or stemming.
- **Removing Stop Words**: Eliminating common words that do not contribute to the meaning of the text.
- **Handling Special Characters**: Removing or replacing characters that are not useful for analysis.
- **Lemmatization**: Reducing words to their base or root form to ensure consistency.

Each step is tailored to the specific requirements of the NLP task and the nature of the dataset.`},

    { question: "what are transformers and how do they work?", answer: `Transformers are a type of neural network architecture that has revolutionized NLP tasks. Key components include:

- **Self-Attention Mechanism**: Allows the model to weigh the importance of different words in a sentence relative to each other, capturing dependencies irrespective of their position.
- **Positional Encoding**: Provides information about the position of each word in the sequence since transformers do not have a built-in sense of order.
- **Multi-Head Attention**: Enables the model to attend to different parts of the sentence simultaneously, capturing diverse contextual information.
- **Feed-Forward Networks**: Applied to each position independently, contributing to the model's ability to learn complex patterns.

Transformers have led to the development of state-of-the-art models like BERT and GPT, which achieve high performance on a wide range of NLP tasks.`},

    { question: "can you explain how sentiment analysis works?", answer: `Sentiment analysis involves determining the emotional tone behind a body of text. The process generally includes:

- **Text Preparation**: Tokenizing and preprocessing the text to extract meaningful features.
- **Feature Extraction**: Converting text into numerical vectors, often using embeddings or other representation techniques.
- **Model Training**: Using labeled datasets to train a model to classify sentiments into categories such as positive, negative, or neutral.
- **Evaluation**: Testing the model's performance using metrics like accuracy, precision, recall, and F1-score.

Sentiment analysis can be performed using various algorithms, including traditional methods like Naive Bayes and more advanced approaches like deep learning models.`},
    
    { question: "what is named entity recognition (NER)?", answer: `Named Entity Recognition (NER) is an NLP task that involves identifying and classifying named entities in text into predefined categories such as person names, organizations, locations, dates, and more. The process typically involves:

- **Tokenization**: Breaking down the text into individual tokens or words.
- **Feature Extraction**: Identifying features that help in classifying tokens into entities, such as part-of-speech tags or word embeddings.
- **Classification**: Using algorithms like Conditional Random Fields (CRF) or neural networks to predict entity labels for each token.
- **Post-processing**: Refining the entity labels and resolving ambiguities.

NER is essential for extracting structured information from unstructured text and is widely used in information retrieval, question answering, and knowledge extraction.`},
    
    { question: "how do you approach model evaluation in NLP?", answer: `Model evaluation in NLP involves assessing the performance of a model using various metrics and methods. Key steps include:

- **Choosing Evaluation Metrics**: Depending on the task, metrics might include accuracy, precision, recall, F1-score, BLEU score for translation, or ROUGE score for summarization.
- **Cross-Validation**: Using techniques like k-fold cross-validation to ensure the model performs well across different subsets of the data.
- **Benchmarking**: Comparing the model's performance against established baselines or other models to gauge its effectiveness.
- **Error Analysis**: Examining the errors made by the model to understand its weaknesses and areas for improvement.

Effective evaluation helps in fine-tuning models and ensuring they meet the desired performance standards.`},
    
    { question: "what are some common challenges in NLP?", answer: `NLP presents several challenges, including:

- **Ambiguity**: Words and phrases can have multiple meanings depending on context, making disambiguation challenging.
- **Sarcasm and Irony**: Detecting and understanding sarcasm or irony in text is difficult for models.
- **Data Scarcity**: Many languages or domains lack sufficient labeled data for training robust models.
- **Contextual Understanding**: Capturing and maintaining context over long texts or conversations is complex.
- **Bias**: NLP models can inadvertently learn and propagate biases present in the training data.

Addressing these challenges often requires sophisticated techniques and ongoing research to improve model robustness and accuracy.`},
    
    { question: "how do you stay updated with advancements in NLP?", answer: `Staying updated with advancements in NLP involves several strategies:

- **Reading Research Papers**: Keeping up with the latest research published in conferences like ACL, EMNLP, and NAACL.
- **Following Influential Researchers**: Engaging with thought leaders and researchers on platforms like Twitter or LinkedIn.
- **Participating in Online Communities**: Joining forums and discussion groups such as those on Reddit or specialized NLP Slack channels.
- **Attending Workshops and Conferences**: Participating in industry events to network and learn about emerging trends and technologies.
- **Experimenting with New Tools and Models**: Hands-on experimentation with cutting-edge tools and frameworks to understand and implement recent advancements.`},

{ question: "examples of Pau projects related to NLP?", answer: `Here are some projects Pau has done related to NLP:
- [**Language identification**](https://github.com/caiselvass/language-identification): using character trigrams to identify 6 different languages, with a 99.89% of accuracy.
- [**Sentiment analysis**](https://github.com/pauhidalgoo/sentiment-analysis): sentiment analysis of movie reviews using both supervised and unsupervised approaches.
- [**Named Entity Recognition**](https://github.com/caiselvass/named-entity-recognition): Conditional Random Field with custom feature functions to identify BIO tags of different entities. Also, an extra model trained to identify CADEC tags (medical terms).
- [**Word embeddings**](https://github.com/pauhidalgoo/word-embeddings): creation of custom word embeddings using CBOW and Word2Vec, and also using them (with some others) for *semantic text similarity*. Finetunned a RoBERTa model and MPNET for the task.
- [**Streaming songs**](https://github.com/pauhidalgoo/top-streaming-songs-modeling): basic descriptive textual analysis of the lyrics of the songs, and also used LSA to find similar songs to a description to create a playlist, finding common topics on music genres, grouping music genres based on Wikipedia descriptions...
- [**Auditoria Challenge**](https://github.com/caiselvass/challenge-auditoria): implemented a little chat that, given a question, identified the python function to call to be able to get insights from a csv of financial data.
- [**GPT**](https://github.com/pauhidalgoo/gpting): getting into the world of transformers by first following Andrej Karpathy videos, and then implementing additional improvements on the transformer architecture
- This little chat ;) which uses Universal Sentence Encoder to select the appropiate response (obviously, if you want a real chat you will need to use LLMs to generate the responses)`}
];


async function loadModel() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'flex';
    model = await use.load(); 
    loadingContainer.style.display = 'none';
}

async function getResponse(userQuestion) {
    if (!model) {
        await loadModel();
    }

    const userQuestionEmbedding = await model.embed(userQuestion);

    let maxSimilarity = -Infinity;
    let bestAnswer = "Sorry, I don't have an answer to that question.";

    for (let i = 0; i < predefinedAnswers.length; i++) {
        const answerEmbedding = await model.embed(predefinedAnswers[i].question);

        console.log(answerEmbedding)
        console.log(userQuestionEmbedding)

        const similarity = tf.tidy(() => {
            const dotProduct = userQuestionEmbedding.dot(answerEmbedding.transpose()).arraySync();
            return dotProduct;
        });
        console.log(similarity)
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestAnswer = predefinedAnswers[i].answer;
        }
    }
    if (maxSimilarity < 0.1){
        bestAnswer = "Sorry, I don't have an answer to that question.";
    }

    return marked.parse(bestAnswer);
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const text = document.getElementById('titletext');
    const chatContainer = document.getElementById('chat-container');
    const sendButton = document.getElementById('send-button');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    async function chatBot() {
        sendButton.disabled = true;
        const userQuestion = userInput.value.trim();
        
        if (userQuestion) {
            const userMessage = document.createElement('div');
            userMessage.textContent = `${userQuestion}`;
            userMessage.className = 'message user';
            chatMessages.appendChild(userMessage);
            

            
            const botResponse = await getResponse(userQuestion);
            const botMessage = document.createElement('div');
            botMessage.innerHTML = `${botResponse}`; 
            botMessage.className = 'message bot'; 
            chatMessages.appendChild(botMessage);
            
            userInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; 
        }
        sendButton.disabled = false;
        
    }
    

    title.addEventListener('click', function() {
        text.classList.add('fade-out');
        setTimeout(() => {
            title.style.display = 'none';
            chatContainer.style.display = 'block';
            loadModel();
        }, 1000);
    });

    sendButton.addEventListener('click', chatBot);
    userInput.addEventListener("keypress", (event) => {
        if (event.code == "Enter" && sendButton.disabled == false) {
            chatBot();
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const brainImage2 = document.querySelector('.alt-floating-brain img');
    const brainMenu = document.getElementById('brainMenu');
    const closeMenu = document.querySelector('.close-menu');
    const sendButton = document.getElementById('send-button');

    const openMenu = () => {
        brainMenu.classList.add('show');
    };
    const closeMenuFunction = () => {
        brainMenu.classList.remove('show');
    };

    brainImage2.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunction);

    brainMenu.addEventListener('click', (event) => {
        if (event.target === brainMenu) {
            closeMenuFunction();
        }
    });
});


document.querySelectorAll('#title-text span').forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.classList.add('hovered');
    });
    letter.addEventListener('mouseout', () => {
        letter.classList.remove('hovered');
    });
});