
const Article = () => {
    return (
        <div className="w-full max-w-3xl p-6 md:p-6 text-gray-900 leading-relaxed">
        <h2 id="what-are-algos" className="text-2xl font-semibold mt-2">
          What Are Algorithms?
        </h2>
        <p className="mt-2">
        At a high level, an algorithm is a set of instructions used to complete a task. We follow algorithms in everyday life—for example, making a sandwich by layering bread, meat, and cheese in a specific order. In computing, algorithms function the same way, guiding a computer through a sequence of steps to solve problems and perform tasks.
        </p>

        <p className="mt-4">
        Algorithms become increasingly complex when they gain the ability to learn and adapt on their own, a process known as artificial intelligence or machine learning. Think of the sandwhich example—you might receive feedback from someone, adjust the ingredients or technique, and refine the recipe over time. Similarly, machine learning algorithms improve by analyzing data, identifying patterns, and continuously optimizing their performance.  
        </p>

        <div className="mt-6 flex">
        <div className="bg-gray-900 w-2 rounded-l-lg"></div>
        <div className="bg-gray-100 p-4 rounded-r-lg flex-1">
        <p className="text-gray-700 text-md">
        Until the 1950s, cognitive processing was considered unique to living organisms, with humans exhibiting the most complex reasoning. Geoffrey Hinton, often called the Godfather of AI, revolutionized the field by advancing deep learning and popularizing backpropagation for training neural networks. His breakthroughs enabled computers to learn from data and recognize patterns in a way that mimics the human brain, laying the foundation for modern AI systems.
        </p>
        </div>
        </div>
        <h2 id="engagement-algorithms" className="text-2xl font-semibold mt-6">
          Engagement Algorithms
        </h2>
        <p className="mt-2">
        Have you ever opened social media and noticed your explore page is filled with the same type of content? For me, it’s almost all UFC—almost like the algorithm knows exactly what I’m most likely to click on. This is no coincidence, rather the engagement algorithm in-action.
        </p>
        <p className="mt-2">
        These algorithms are built to maximize your time on the platform. They track your likes, comments, shares, and how long you view each post, then analyze these patterns to recommend similar content. They also experiment with new content to see what captures your interest. Over time, they become increasingly sophisticated, continuously improving their ability to keep you scrolling.
        </p>
        <p className="mt-6 italic text-gray-600">
          Stay aware. Stay intentional. Don’t let the algorithm control you.
        </p>
      </div>
    );
    };

export default Article