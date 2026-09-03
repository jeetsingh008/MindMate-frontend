import React, { useState } from "react";

// Therapy data for each disorder
const therapies = {
  Normal: {
    description: "No significant issues detected.",
    therapies: [
      "Encouragement for ongoing self-care such as mindfulness, exercise, and maintaining social connections.",
      "Tools for building resilience and managing day-to-day stress effectively.",
      "Suggest activities like journaling, meditation, or hobbies for continued mental well-being.",
    ],
  },
  Depression: {
    description:
      "Persistent feelings of sadness, hopelessness, or lack of interest.",
    therapies: [
      "Cognitive Behavioral Therapy (CBT): Helps challenge negative thought patterns and improve coping strategies.",
      "Interpersonal Therapy (IPT): Focuses on improving relationships and addressing social challenges.",
      "Behavioral Activation: Encourages engaging in meaningful activities to combat inactivity.",
      "Medication: Antidepressants like SSRIs may be prescribed if needed.",
      "Lifestyle Interventions: Regular physical activity, maintaining a sleep schedule, and healthy eating habits.",
    ],
  },
  Suicidal: {
    description: "Thoughts of self-harm or suicide.",
    therapies: [
      "Crisis Intervention: Immediate support through hotlines or emergency services.",
      "Dialectical Behavioral Therapy (DBT): Effective for managing self-harm and suicidal ideation by building emotional regulation skills.",
      "Safety Planning: Develop a personalized plan including warning signs, coping strategies, and emergency contacts.",
      "Support Groups: Peer support to reduce feelings of isolation.",
      "Collaboration with psychiatrists for medication management when appropriate.",
    ],
  },
  Anxiety: {
    description: "Excessive worry or fear that interferes with daily life.",
    therapies: [
      "CBT for Anxiety: Teaches skills to identify and manage anxiety triggers and reframe negative thoughts.",
      "Exposure Therapy: Gradual exposure to feared situations to desensitize anxiety responses.",
      "Relaxation Techniques: Includes breathing exercises, progressive muscle relaxation, or mindfulness meditation.",
      "Medication: Short-term use of benzodiazepines or long-term use of SSRIs may be considered.",
      "Encourage regular exercise and stress management techniques.",
    ],
  },
  Bipolar: {
    description:
      "Mood disorder characterized by episodes of depression and mania.",
    therapies: [
      "Psychoeducation: Helps individuals and families understand bipolar disorder and recognize early signs of mood changes.",
      "Mood Stabilizers: Medications like lithium or valproate are commonly prescribed.",
      "Interpersonal and Social Rhythm Therapy (IPSRT): Focuses on stabilizing daily routines to manage mood swings.",
      "CBT for Bipolar: Addresses depressive episodes and helps develop coping mechanisms.",
      "Encouragement for consistent sleep patterns and avoiding substance use.",
    ],
  },
  Stress: {
    description:
      "Mental or emotional strain caused by demanding circumstances.",
    therapies: [
      "Stress Management Techniques: Breathing exercises, yoga, and progressive muscle relaxation.",
      "Mindfulness-Based Stress Reduction (MBSR): Focused mindfulness meditation practices to reduce stress.",
      "CBT for Stress: Identifying and reframing stress-inducing thoughts.",
      "Lifestyle Adjustments: Incorporating regular exercise, time management, and boundary-setting.",
      "Encourage hobbies and leisure activities to decompress.",
    ],
  },
  PersonalityDisorder: {
    description:
      "Long-term patterns of behavior and thought that differ from societal expectations.",
    therapies: [
      "DBT: Effective for borderline personality disorder, focusing on emotion regulation and interpersonal skills.",
      "Schema Therapy: Helps modify deeply ingrained negative beliefs and patterns.",
      "Psychodynamic Therapy: Explores unconscious motivations and past experiences influencing current behavior.",
      "Long-term talk therapy for deeper self-awareness and behavior modification.",
      "Focus on building healthy interpersonal relationships and coping mechanisms.",
    ],
  },
};

function Therapy({ disorderName }) {
  const [showTherapy, setShowTherapy] = useState(false);

  const handleShowTherapy = () => {
    setShowTherapy((prev) => !prev);
  };

  const therapy = therapies[disorderName] || {
    description: "Unknown disorder",
    therapies: ["Consult a healthcare professional for guidance"],
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleShowTherapy}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        {showTherapy ? "Hide Therapy" : "View Therapy"}
      </button>
      {showTherapy && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-left">
          <h2 className="text-lg font-bold text-green-700 mb-2">
            Therapy Info
          </h2>
          <p className="mb-2">
            <strong>Description:</strong> {therapy.description}
          </p>
          <ul className="list-disc pl-5">
            <strong>Cures:</strong>
            {therapy.therapies.map((cure, index) => (
              <li key={index}>{cure}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Therapy;
