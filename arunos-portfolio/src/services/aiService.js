/**
 * Local Intelligence Matrix Architecture
 * Handles natural speech intent parsing, randomized conversational variation,
 * and contextual routing for Arun's core portfolio metrics.
 */

const aiKnowledgeBase = {
  greetings: [
    "Hi there! I'm Arun's digital twin. Ask me about his software builds, engineering stack, or IoT configurations!",
    "Hello! Ready to explore Arun's portfolio pipeline? I can unpack his experience in Java, Flutter, or embedded hardware arrays.",
    "Hey! I am Arun's AI proxy. Want to look into his technical toolbelt, full-stack systems, or recent college projects?"
  ],
  projects: [
    "Arun designed an IoT Two-Wheeler Alcohol Detection system using an MQ-3 sensor to lock vehicle ignitions, alongside a Smart Tourist Safety tracker utilizing ESP32 microcontrollers and simulated geofencing zones.",
    "He specializes in embedded systems integration. His standout builds include a bike-locking safety loop powered by an MQ-3 breath analyzer and an ESP32 tourist location network that streams real-time telemetry data over simulated nodes.",
    "On the engineering front, Arun built an automated alcohol-prevention ignition lock for motorcycles and engineered a safety architecture for tourists that tracks coordinates using a NEO-7M GPS module."
  ],
  skills: [
    "Arun's technical core includes strong competencies in Java, JavaScript, and Flutter framework builds. He handles backend data architectures using MySQL and SQLite relational databases.",
    "He bridges the gap between hardware and software. His toolbelt features web application layout, hybrid cross-platform mobile apps using Flutter, and native database manipulation with MySQL.",
    "Proficient in Java development, JavaScript routing, and Flutter interfaces. He has also completed professional implant training focusing on Full Stack Web Development and UI/UX layouts."
  ],
  education: [
    "Arun is pursuing his B.E. in Computer Science and Engineering at Kongu Engineering College, maintaining a high-caliber current CGPA of 8.77.",
    "He is an elite engineering student at Kongu Engineering College. His current academic standing sits at an outstanding 8.77 CGPA in Computer Science and Engineering.",
    "Academically, Arun is anchored in Computer Science and Engineering at Kongu Engineering College, where he holds a stellar 8.77 CGPA across his core programming curriculums."
  ],
  future: [
    "Looking forward, Arun is conceptualizing an advanced wearable tracking wristband integrating standalone LoRaWAN communication networks designed onto compact flexible PCBs.",
    "His future development roadmap includes prototyping low-power wearable systems using flexible PCB architecture and LoRaWAN long-range frequencies."
  ],
  fallback: [
    "I can definitely dive deeper into that. Would you like me to pull up specific data regarding his 8.77 college CGPA, his Java full-stack skills, or his embedded IoT projects?",
    "Interesting prompt! While I'm local, I can tell you all about Arun's engineering capabilities. Ask me about his MQ-3 bike project or his studies at Kongu Engineering College.",
    "Let's pinpoint that down. I have access to his full technical skills data matrix, college background, and IoT builds. Which one should we unpack?"
  ]
};

// Helper utility to select a random item from a string array to prevent repetitive outputs
const getRandomResponse = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const handleAIQuery = async (query) => {
  // Simulate network processing delay for typing indicator realism
  await new Promise((resolve) => setTimeout(resolve, 600));

  const text = query.toLowerCase().trim();

  // 1. Structural Greeting Intent Matching
  if (text.match(/^(hi|hello|hey|greetings|yo)/)) {
    return getRandomResponse(aiKnowledgeBase.greetings);
  }

  // 2. Academic / College Marks Intent Matching
  if (text.includes('mark') || text.includes('cgpa') || text.includes('college') || text.includes('education') || text.includes('stud')) {
    return getRandomResponse(aiKnowledgeBase.education);
  }

  // 3. Project Metrics Intent Matching
  if (text.includes('project') || text.includes('build') || text.includes('make') || text.includes('system') || text.includes('iot')) {
    return getRandomResponse(aiKnowledgeBase.projects);
  }

  // 4. Engineering / Programming Skills Intent Matching
  if (text.includes('skill') || text.includes('stack') || text.includes('language') || text.includes('java') || text.includes('flutter') || text.includes('expert')) {
    return getRandomResponse(aiKnowledgeBase.skills);
  }

  // 5. Future Scope Intent Matching
  if (text.includes('future') || text.includes('next') || text.includes('wristband') || text.includes('lora')) {
    return getRandomResponse(aiKnowledgeBase.future);
  }

  // 6. Comprehensive Fallback Matrix Loop
  return getRandomResponse(aiKnowledgeBase.fallback);
};