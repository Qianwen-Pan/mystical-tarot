const tarotCards = [
  {
    id: 1,
    name: "The Fool",
    image: "assets/images/divine/the_fool.png",
    upright: "New beginnings, adventure, foolishness.",
    reversed: "Recklessness, fear of change, risk-taking.",
    interpretations: {
      decisionMaking: {
        upright: {
          pros: "Indicates new opportunities and a sense of adventure. Embracing this path could lead you to unexplored territories, both physically and emotionally. You might find yourself embarking on a journey that redefines your life's purpose. There is a childlike wonder associated with this card, urging you to embrace the unknown with open arms and a hopeful heart.",
          cons: "Warns against recklessness and hasty decisions. While adventure beckons, it is essential to tread carefully. Not all that glitters is gold, and a lack of planning could lead to unforeseen pitfalls. There is a thin line between bravery and foolishness; ensure you are on the right side of it. Avoid making decisions based on impulse without considering the long-term consequences.",
          outcome:
            "Suggests that taking a leap of faith may lead to growth and new experiences. If you can balance your enthusiasm with caution, this journey could lead to significant personal growth and a wealth of experiences. You may discover new facets of your personality, encounter inspiring people, and find joy in the journey itself. The path may not always be clear, but trust that each step will bring you closer to your true self.",
        },
        reversed: {
          pros: "Encourages re-evaluating risks before making decisions. This is a time to pause and reflect on the potential hazards that lie ahead. Being cautious and considering the pros and cons can save you from unnecessary trouble. It is wise to reassess your plans and ensure they are foolproof before proceeding.",
          cons: "Indicates potential fear of change and impulsiveness. There may be an overwhelming sense of anxiety about venturing into the unknown. This fear can paralyze you, preventing you from making necessary changes. On the other hand, acting on impulse without due consideration can lead to regrettable outcomes.",
          outcome:
            "Suggests that being cautious may prevent unnecessary risks. By carefully evaluating each step, you can avoid the traps of recklessness. This approach ensures that your journey, while perhaps slower and more deliberate, is safer and more rewarding in the long run.",
        },
      },
      dreamInterpretation: {
        upright: {
          hiddenFears:
            "Fear of taking risks and embracing new beginnings. You may be holding back due to an inherent fear of the unknown. This fear can manifest in dreams where you are hesitant to take the first step or feel overwhelmed by the possibilities.",
          desires:
            "A strong desire for adventure and new experiences. Deep down, there is a yearning for exploration and the thrill of discovering something new. Your dreams may be filled with images of travel, new places, and exciting encounters, reflecting this desire.",
          warnings:
            "Beware of recklessness and making hasty decisions. Your dreams might be cautioning you to take a step back and think things through. They could be showing you the potential consequences of impulsive actions, urging you to plan and prepare adequately.",
        },
        reversed: {
          hiddenFears:
            "Anxiety about the unknown and potential risks. This fear can create a barrier, preventing you from moving forward. Your dreams may reflect this by presenting scenarios where you feel trapped or unable to progress.",
          desires:
            "A desire for stability and avoiding change. Despite the fear of the unknown, there is also a strong craving for stability and certainty. You may dream of safe, familiar environments that provide comfort and security.",
          warnings:
            "Caution against being too impulsive and unprepared. Your subconscious might be highlighting the need for better preparation and careful planning. Dreams could be serving as a reminder to be more deliberate in your actions and decisions.",
        },
      },
    },
  },
  {
    id: 2,
    name: "The Magician",
    image: "assets/images/divine/the_magician.png",
    upright: "Action, the power to manifest.",
    reversed: "Manipulation, poor planning, untapped talents.",
    interpretations: {
      decisionMaking: {
        upright: {
          pros: "Encourages taking action and utilizing skills effectively. This card signifies the power of manifesting your desires into reality. It speaks to your ability to use your talents and resources wisely to achieve your goals. The Magician empowers you to take proactive steps, harness your skills, and turn your visions into tangible results.",
          cons: "Warns against overconfidence and mismanagement. While you have the power to achieve great things, overestimating your abilities or mismanaging resources can lead to failure. The Magician cautions against arrogance and encourages careful planning and execution.",
          outcome:
            "Suggests success through focused effort and resourcefulness. With the right approach, you can accomplish your goals and manifest your desires. The outcome is favorable if you remain focused, resourceful, and adaptable. The Magician promises that hard work and strategic use of your skills will lead to significant achievements.",
        },
        reversed: {
          pros: "Highlights the need for better planning and preparation. The reversed Magician urges you to take a step back and reassess your strategies. Proper planning and a clear vision are essential to avoid pitfalls. This is a time to refine your plans and ensure you are fully prepared before moving forward.",
          cons: "Indicates potential for manipulation and deceit. There is a risk of being misled or manipulated by others. The reversed Magician warns against deceitful practices and encourages honesty and integrity in your dealings. Beware of individuals who might try to take advantage of your skills and resources.",
          outcome:
            "Suggests that careful planning can prevent future failures. By taking the time to plan meticulously and prepare thoroughly, you can avoid setbacks and ensure a successful outcome. The reversed Magician highlights the importance of foresight and strategic thinking to navigate challenges effectively.",
        },
      },
      dreamInterpretation: {
        upright: {
          hiddenFears:
            "Fear of inadequacy and unfulfilled potential. You may be grappling with self-doubt and concerns about your ability to achieve your goals. This fear can manifest in dreams where you feel powerless or unable to harness your full potential.",
          desires:
            "A desire to manifest goals and take control. There is a strong urge to take charge of your destiny and make your dreams a reality. Your dreams may feature scenarios where you successfully overcome obstacles and achieve your aspirations.",
          warnings:
            "Beware of overextending and misusing talents. The Magician cautions against spreading yourself too thin or misapplying your skills. Your dreams may serve as a reminder to focus your efforts and use your talents wisely to avoid burnout and failure.",
        },
        reversed: {
          hiddenFears:
            "Anxiety about manipulation and lack of direction. You may fear being deceived or manipulated by others, leading to a sense of directionlessness. This fear can surface in dreams where you feel lost or guided by misleading forces.",
          desires:
            "A desire for better planning and self-discipline. There is a yearning for structure and strategic planning to achieve your goals. Your dreams might reflect a need for more disciplined and methodical approaches to your endeavors.",
          warnings:
            "Caution against deceit and poor preparation. The reversed Magician warns you to be wary of dishonesty and the consequences of inadequate preparation. Your dreams may highlight the importance of integrity and careful planning to avoid negative outcomes.",
        },
      },
    },
  },
  {
    id: 3,
    name: "The High Priestess",
    image: "assets/images/divine/the_high_priestess.png",
    upright: "Intuition, higher powers, mystery, subconscious mind.",
    reversed: "Hidden agendas, need to listen to inner voice.",
    interpretations: {
      decisionMaking: {
        upright: {
          pros: "Encourages relying on intuition and inner wisdom. The High Priestess represents the power of the subconscious mind and urges you to trust your instincts. In decision-making, this card advises you to look beyond the surface and tap into your inner knowledge. By following your intuition, you can make choices that align with your true self.",
          cons: "Warns against ignoring inner voice and gut feelings. Ignoring your intuition can lead to missteps and misunderstandings. The High Priestess cautions you to pay attention to the subtle cues and feelings that arise within you. Disregarding these signals can result in poor decisions and missed opportunities.",
          outcome:
            "Suggests success through introspection and understanding. Taking the time to reflect and understand the deeper truths will lead to successful outcomes. The High Priestess promises clarity and insight if you embrace introspection and trust your inner voice. This card indicates that your journey will be guided by wisdom and profound understanding.",
        },
        reversed: {
          pros: "Highlights the need for deeper introspection and self-awareness. The reversed High Priestess urges you to delve deeper into your subconscious and uncover hidden truths. This is a time for self-discovery and gaining a better understanding of your motivations and desires.",
          cons: "Indicates potential for misunderstanding and hidden agendas. There may be unseen forces or hidden motives at play. The reversed High Priestess warns you to be cautious and aware of possible deceit or misunderstandings. Trust your instincts and look beneath the surface to uncover the truth.",
          outcome:
            "Suggests that clarity can be achieved through patience and reflection. By taking a patient and reflective approach, you can uncover the hidden aspects of your situation and gain clarity. The reversed High Priestess emphasizes the importance of patience and thoughtful consideration in achieving a clear and insightful outcome.",
        },
      },
      dreamInterpretation: {
        upright: {
          hiddenFears:
            "Fear of the unknown and hidden truths. You may be afraid of what lies beneath the surface and the secrets that may be revealed. This fear can manifest in dreams where you encounter mysterious or unsettling scenarios.",
          desires:
            "A desire for deeper understanding and spiritual growth. There is a strong yearning to explore the mysteries of life and gain spiritual insight. Your dreams may reflect this desire by presenting symbolic or mystical imagery that calls you to seek deeper truths.",
          warnings:
            "Beware of ignoring intuition and inner guidance. The High Priestess warns you not to dismiss your inner voice. Your dreams may serve as a reminder to trust your instincts and pay attention to the guidance that comes from within.",
        },
        reversed: {
          hiddenFears:
            "Anxiety about hidden motives and lack of clarity. You may be concerned about deception or the inability to see the full picture. This anxiety can surface in dreams where you feel confused or misled.",
          desires:
            "A desire for greater transparency and self-awareness. There is a longing for clear and honest communication, both with yourself and others. Your dreams might reflect a need for openness and understanding to achieve inner clarity.",
          warnings:
            "Caution against hidden agendas and self-deception. The reversed High Priestess advises you to be wary of hidden motives, whether they are your own or others'. Your dreams may highlight the dangers of self-deception and the importance of seeking truth and clarity in all matters.",
        },
      },
    },
  },
  {
    "id": 4,
    "name": "The Empress",
    "image": "assets/images/divine/the_empress.png",
    "upright": "Abundance, nurturing, fertility, life in bloom!",
    "reversed": "Smothering, lack of progress, dependence.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Indicates creativity and nurturing in decisions. The Empress symbolizes growth, abundance, and nurturing energy. She encourages you to approach your decisions with creativity and compassion, fostering an environment where ideas and projects can flourish.",
          "cons": "Warns against being overly protective or smothering. While nurturing is important, being too controlling or overbearing can stifle growth. The Empress cautions against becoming too involved to the point where you hinder the progress of others.",
          "outcome": "Suggests that nurturing ideas will lead to growth and abundance. By cultivating your ideas with care and allowing them to develop naturally, you can achieve prosperity and success. The Empress promises a bountiful outcome if you balance nurturing with allowing space for growth."
        },
        "reversed": {
          "pros": "Highlights the need for self-reliance and independence. The reversed Empress encourages you to focus on your own growth and self-sufficiency. This is a time to stand on your own and develop your abilities without relying too heavily on others.",
          "cons": "Indicates potential stagnation and lack of progress. When reversed, the Empress warns of becoming too dependent on others or stuck in a rut. This can lead to a lack of progress and frustration.",
          "outcome": "Suggests that breaking free from dependence can lead to growth. By fostering independence and breaking free from overly dependent relationships or situations, you can achieve significant personal and professional growth."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of not nurturing or providing enough. You may worry that you are not giving enough care or attention to those you love or to your projects.",
          "desires": "A desire for fertility and creative expression. There is a longing to create and nurture, whether through artistic endeavors, personal projects, or relationships.",
          "warnings": "Beware of smothering others with your care. While your intentions are good, over-nurturing can become overwhelming for those you care about. Balance is key."
        },
        "reversed": {
          "hiddenFears": "Anxiety about dependence and lack of progress. You may fear being stuck in a situation where you are overly dependent on others, leading to stagnation.",
          "desires": "A desire for independence and self-sufficiency. You yearn to be self-reliant and to grow on your own terms.",
          "warnings": "Caution against stagnation and over-dependence on others. The reversed Empress warns you to seek balance and avoid becoming too reliant on external support."
        }
      }
    }
  },
  {
    "id": 5,
    "name": "The Emperor",
    "image": "assets/images/divine/the_emperor.png",
    "upright": "Authority, structure, control, fatherhood.",
    "reversed": "Domination, excessive control, lack of discipline.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages structure and discipline in decisions. The Emperor represents authority and stability, urging you to establish clear plans and maintain order. This disciplined approach will help you achieve your goals efficiently.",
          "cons": "Warns against being overly authoritative or rigid. While structure is important, being too inflexible can hinder creativity and adaptability. The Emperor cautions against an overly rigid approach that doesn't allow for spontaneity or change.",
          "outcome": "Suggests that structure and control will lead to stability and success. By implementing strong foundations and maintaining control, you can achieve a stable and successful outcome. The Emperor promises long-term success through disciplined efforts."
        },
        "reversed": {
          "pros": "Highlights the need for flexibility and adaptability. The reversed Emperor encourages you to loosen your grip and be more adaptable. Flexibility can lead to new opportunities and solutions that a rigid approach might miss.",
          "cons": "Indicates potential for excessive control and domination. There is a risk of becoming too controlling or domineering, which can stifle growth and lead to resistance from others.",
          "outcome": "Suggests that loosening control can lead to better outcomes. By allowing more freedom and flexibility, you can foster a more dynamic and responsive environment, leading to better results."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of losing control and authority. You may worry about losing your grip on situations or people, leading to chaos or failure.",
          "desires": "A desire for stability and order. There is a strong need for structured environments and clear rules to feel secure.",
          "warnings": "Beware of becoming too rigid and authoritative. Overly strict or controlling behavior can lead to conflicts and dissatisfaction. Strive for balance and fairness."
        },
        "reversed": {
          "hiddenFears": "Anxiety about excessive control and domination. You may fear becoming or encountering someone who is overly controlling, leading to tension and resistance.",
          "desires": "A desire for more flexibility and freedom. You long for a more relaxed and adaptable approach to life and decision-making.",
          "warnings": "Caution against being too controlling and inflexible. The reversed Emperor advises against a domineering attitude and encourages a more balanced and open-minded approach."
        }
      }
    }
  },
  {
    "id": 6,
    "name": "The Hierophant",
    "image": "assets/images/divine/the_hierophant.png",
    "upright": "Tradition, conformity, morality, ethics.",
    "reversed": "Rebellion, subversiveness, new approaches.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages following traditional values and ethics. The Hierophant represents established norms and wisdom, urging you to adhere to conventional methods and moral guidelines in your decisions.",
          "cons": "Warns against being too conformist and rigid. While tradition has its place, being overly conformist can stifle innovation and creativity. The Hierophant cautions against blind adherence to rules without considering new perspectives.",
          "outcome": "Suggests that adhering to traditions can lead to stability and respect. By following tried and true methods, you can achieve a stable and respected position. The Hierophant promises success through adherence to established practices and ethical standards."
        },
        "reversed": {
          "pros": "Highlights the need for new approaches and innovation. The reversed Hierophant encourages you to break away from traditional norms and explore new ideas. This is a time for innovation and thinking outside the box.",
          "cons": "Indicates potential for rebellion and subversion. There is a risk of going too far in rejecting tradition, leading to instability and conflict.",
          "outcome": "Suggests that challenging traditions can lead to progress. By questioning and redefining conventional methods, you can pave the way for new advancements and breakthroughs."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of breaking away from traditions and norms. You may worry about the consequences of deviating from established paths.",
          "desires": "A desire for structure and moral guidance. There is a longing for clear rules and ethical standards to guide your actions.",
          "warnings": "Beware of becoming too conformist and rigid. Over-reliance on tradition can limit your potential for growth and innovation. Strive for balance."
        },
        "reversed": {
          "hiddenFears": "Anxiety about subversion and rebellion. You may fear the chaos that can come from rejecting established norms.",
          "desires": "A desire for innovation and breaking free from norms. You yearn to explore new ideas and challenge the status quo.",
          "warnings": "Caution against being too rebellious and unconventional. The reversed Hierophant warns you to find a balance between innovation and respect for tradition."
        }
      }
    }
  },
  {
    "id": 7,
    "name": "The Lovers",
    "image": "assets/images/divine/the_lovers.png",
    "upright": "Love, harmony, relationships, values alignment.",
    "reversed": "Imbalance, misalignment of values, disharmony.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages harmony and alignment in decisions. The Lovers card signifies deep connections and alignment of values, urging you to make decisions that foster harmony and mutual respect in relationships.",
          "cons": "Warns against ignoring personal values and relationships. Neglecting your own values or those of others can lead to conflict and dissatisfaction. The Lovers caution against compromising on what truly matters to you.",
          "outcome": "Suggests that harmony and alignment will lead to fulfilling outcomes. By making choices that honor your values and relationships, you can achieve deeply fulfilling and harmonious results."
        },
        "reversed": {
          "pros": "Highlights the need for addressing imbalances and misalignments. The reversed Lovers urge you to identify and rectify any imbalances in your relationships or values.",
          "cons": "Indicates potential for disharmony and misalignment. There is a risk of conflict and misunderstanding if underlying issues are not addressed.",
          "outcome": "Suggests that resolving conflicts can lead to harmony. By addressing and resolving conflicts, you can restore balance and achieve a harmonious outcome."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of disharmony and misalignment in relationships. You may worry about conflicts and misalignments in your personal or professional relationships.",
          "desires": "A desire for love, harmony, and alignment. There is a strong yearning for deep connections and harmonious relationships.",
          "warnings": "Beware of ignoring personal values and relationships. Neglecting what is truly important to you can lead to dissatisfaction and conflict."
        },
        "reversed": {
          "hiddenFears": "Anxiety about imbalances and misalignments. You may fear that unresolved issues could lead to ongoing conflict and disharmony.",
          "desires": "A desire for resolving conflicts and achieving harmony. You long for balance and resolution in your relationships.",
          "warnings": "Caution against ignoring relationship issues and imbalances. The reversed Lovers warn you to address underlying problems to restore harmony."
        }
      }
    }
  },
  {
    "id": 8,
    "name": "The Chariot",
    "image": "assets/images/divine/the_chariot.png",
    "upright": "Control, willpower, success, determination.",
    "reversed": "Lack of control, aggression, obstacles.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages willpower and determination in decisions. The Chariot represents the power of control and determination, urging you to take charge and move forward with confidence.",
          "cons": "Warns against being overly aggressive and controlling. While determination is important, too much aggression and control can lead to resistance and conflict. The Chariot cautions against a heavy-handed approach.",
          "outcome": "Suggests that determination and control will lead to success. By maintaining focus and control, you can overcome obstacles and achieve your goals. The Chariot promises success through unwavering determination and willpower."
        },
        "reversed": {
          "pros": "Highlights the need for more control and direction. The reversed Chariot urges you to regain control and find a clear direction for your efforts.",
          "cons": "Indicates potential for aggression and obstacles. There is a risk of encountering resistance and obstacles if you are too forceful or lack direction.",
          "outcome": "Suggests that overcoming obstacles can lead to success. By addressing and overcoming the challenges you face, you can achieve your goals and move forward with confidence."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of losing control and direction. You may worry about being unable to steer your life in the right direction.",
          "desires": "A desire for success and determination. There is a strong drive to achieve your goals and assert control over your destiny.",
          "warnings": "Beware of being overly aggressive and controlling. The Chariot warns you to balance determination with sensitivity to avoid conflicts."
        },
        "reversed": {
          "hiddenFears": "Anxiety about aggression and obstacles. You may fear encountering insurmountable obstacles and losing control.",
          "desires": "A desire for more control and direction. You long for clarity and the ability to steer your life with confidence.",
          "warnings": "Caution against losing control and direction. The reversed Chariot advises you to regain focus and control to navigate challenges effectively."
        }
      }
    }
  },
  {
    "id": 9,
    "name": "Strength",
    "image": "assets/images/divine/stregth.png",
    "upright": "Courage, subtle power, integration of animal self.",
    "reversed": "Weakness, self-doubt, lack of self-discipline.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages courage and inner strength in decisions. Strength represents the power of gentle influence and inner resolve, urging you to approach decisions with courage and confidence.",
          "cons": "Warns against relying solely on brute force. While strength is important, over-reliance on force can lead to resistance and burnout. Strength cautions you to balance power with compassion.",
          "outcome": "Suggests that courage and inner strength will lead to success. By harnessing your inner strength and approaching challenges with confidence, you can achieve your goals and overcome obstacles."
        },
        "reversed": {
          "pros": "Highlights the need for more self-discipline and inner strength. The reversed Strength card encourages you to develop greater self-discipline and resilience.",
          "cons": "Indicates potential for self-doubt and weakness. There is a risk of succumbing to self-doubt and feeling overwhelmed by challenges.",
          "outcome": "Suggests that overcoming self-doubt can lead to success. By building inner strength and self-discipline, you can overcome obstacles and achieve your goals."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of weakness and lack of control. You may worry about being unable to handle challenges and feeling powerless.",
          "desires": "A desire for courage and inner strength. There is a longing to develop greater resilience and confidence.",
          "warnings": "Beware of relying solely on brute force. Strength warns you to balance power with compassion and subtle influence."
        },
        "reversed": {
          "hiddenFears": "Anxiety about self-doubt and weakness. You may fear that your lack of confidence and self-discipline will hold you back.",
          "desires": "A desire for more self-discipline and inner strength. You long to develop greater resilience and overcome self-doubt.",
          "warnings": "Caution against self-doubt and lack of self-discipline. The reversed Strength card advises you to build inner strength and confidence to navigate challenges effectively."
        }
      }
    }
  },
  {
    "id": 10,
    "name": "The Hermit",
    "image": "assets/images/divine/the_hermit.png",
    "upright": "Meditation, solitude, consciousness.",
    "reversed": "Isolation, loneliness, withdrawal.",
    "interpretations": {
      "decisionMaking": {
        "upright": {
          "pros": "Encourages introspection and solitude in decisions. The Hermit represents the power of reflection and inner guidance, urging you to seek wisdom within yourself before making decisions.",
          "cons": "Warns against becoming too isolated and withdrawn. While introspection is valuable, too much isolation can lead to loneliness and detachment. The Hermit cautions you to balance solitude with social connections.",
          "outcome": "Suggests that introspection and solitude will lead to clarity. By taking the time to reflect and seek inner guidance, you can achieve clarity and make well-informed decisions."
        },
        "reversed": {
          "pros": "Highlights the need for more social interaction and engagement. The reversed Hermit encourages you to seek out social connections and engage with others to gain new perspectives.",
          "cons": "Indicates potential for isolation and loneliness. There is a risk of becoming too withdrawn and disconnected from others.",
          "outcome": "Suggests that overcoming isolation can lead to clarity. By reaching out and engaging with others, you can gain new insights and achieve greater clarity."
        }
      },
      "dreamInterpretation": {
        "upright": {
          "hiddenFears": "Fear of isolation and loneliness. You may worry about being alone and disconnected from others.",
          "desires": "A desire for introspection and solitude. There is a longing for time alone to reflect and seek inner guidance.",
          "warnings": "Beware of becoming too isolated and withdrawn. The Hermit warns you to balance introspection with social connections."
        },
        "reversed": {
          "hiddenFears": "Anxiety about isolation and loneliness. You may fear being cut off from social connections and feeling alone.",
          "desires": "A desire for more social interaction and engagement. You long for meaningful connections and the exchange of ideas.",
          "warnings": "Caution against withdrawal and isolation. The reversed Hermit advises you to seek out social interactions and avoid becoming too withdrawn."
        }
      }
    }
  },
];
//   {
//     "id": 11,
//     "name": "Wheel of Fortune",
//     "upright": "Cycles, change, ups and downs.",
//     "reversed": "Bad luck, resistance to change, breaking cycles.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages embracing change and cycles in decisions.",
//           "cons": "Warns against resisting change and clinging to the past.",
//           "outcome": "Suggests that embracing change will lead to new opportunities."
//         },
//         "reversed": {
//           "pros": "Highlights the need for breaking negative cycles.",
//           "cons": "Indicates potential for bad luck and resistance to change.",
//           "outcome": "Suggests that breaking negative cycles can lead to positive outcomes."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of change and uncertainty.",
//           "desires": "A desire for stability and predictability.",
//           "warnings": "Beware of resisting change and clinging to the past."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about bad luck and negative cycles.",
//           "desires": "A desire for breaking negative cycles and patterns.",
//           "warnings": "Caution against resisting change and clinging to the past."
//         }
//       }
//     }
//   },
//   {
//     "id": 12,
//     "name": "Justice",
//     "upright": "Fairness, truth, legal matters.",
//     "reversed": "Dishonesty, unaccountability, unfairness.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages fairness and truth in decisions.",
//           "cons": "Warns against dishonesty and bias.",
//           "outcome": "Suggests that fairness and truth will lead to just outcomes."
//         },
//         "reversed": {
//           "pros": "Highlights the need for accountability and fairness.",
//           "cons": "Indicates potential for dishonesty and unfairness.",
//           "outcome": "Suggests that addressing unfairness can lead to just outcomes."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of injustice and dishonesty.",
//           "desires": "A desire for fairness and truth.",
//           "warnings": "Beware of dishonesty and bias."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about unaccountability and unfairness.",
//           "desires": "A desire for accountability and fairness.",
//           "warnings": "Caution against dishonesty and bias."
//         }
//       }
//     }
//   },
//   {
//     "id": 13,
//     "name": "The Hanged Man",
//     "upright": "Surrender, new perspective, enlightenment.",
//     "reversed": "Resistance, stalling, indecision.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages surrender and new perspectives in decisions.",
//           "cons": "Warns against resistance and stalling.",
//           "outcome": "Suggests that surrender and new perspectives will lead to enlightenment."
//         },
//         "reversed": {
//           "pros": "Highlights the need for decisiveness and action.",
//           "cons": "Indicates potential for resistance and indecision.",
//           "outcome": "Suggests that overcoming resistance can lead to enlightenment."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of surrender and new perspectives.",
//           "desires": "A desire for enlightenment and new perspectives.",
//           "warnings": "Beware of resistance and stalling."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about indecision and resistance.",
//           "desires": "A desire for decisiveness and action.",
//           "warnings": "Caution against stalling and resistance."
//         }
//       }
//     }
//   },
//   {
//     "id": 14,
//     "name": "Death",
//     "upright": "Endings, transformation, change.",
//     "reversed": "Resistance to change, personal transformation, inner purging.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages embracing endings and transformation in decisions.",
//           "cons": "Warns against resisting change and clinging to the past.",
//           "outcome": "Suggests that embracing change will lead to new beginnings."
//         },
//         "reversed": {
//           "pros": "Highlights the need for personal transformation.",
//           "cons": "Indicates potential for resistance to change.",
//           "outcome": "Suggests that overcoming resistance can lead to new beginnings."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of change and endings.",
//           "desires": "A desire for transformation and new beginnings.",
//           "warnings": "Beware of resisting change and clinging to the past."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about personal transformation and inner purging.",
//           "desires": "A desire for personal growth and transformation.",
//           "warnings": "Caution against resisting change and personal transformation."
//         }
//       }
//     }
//   },
//   {
//     "id": 15,
//     "name": "Temperance",
//     "upright": "Balance, moderation, patience, purpose.",
//     "reversed": "Imbalance, excess, lack of long-term vision.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages balance and moderation in decisions.",
//           "cons": "Warns against excess and impatience.",
//           "outcome": "Suggests that balance and moderation will lead to success."
//         },
//         "reversed": {
//           "pros": "Highlights the need for more balance and long-term vision.",
//           "cons": "Indicates potential for imbalance and excess.",
//           "outcome": "Suggests that finding balance can lead to success."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of imbalance and lack of control.",
//           "desires": "A desire for balance and moderation.",
//           "warnings": "Beware of excess and impatience."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about imbalance and lack of long-term vision.",
//           "desires": "A desire for more balance and long-term vision.",
//           "warnings": "Caution against excess and lack of long-term vision."
//         }
//       }
//     }
//   },
//   {
//     "id": 16,
//     "name": "The Devil",
//     "upright": "Shadow self, attachment, addiction, restriction.",
//     "reversed": "Releasing limiting beliefs, exploring dark thoughts, detachment.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages awareness of attachments and addictions.",
//           "cons": "Warns against giving in to shadow self and restrictions.",
//           "outcome": "Suggests that facing shadow self will lead to freedom."
//         },
//         "reversed": {
//           "pros": "Highlights the need for releasing limiting beliefs.",
//           "cons": "Indicates potential for dark thoughts and detachment.",
//           "outcome": "Suggests that exploring dark thoughts can lead to freedom."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of attachment and addiction.",
//           "desires": "A desire for freedom from restrictions.",
//           "warnings": "Beware of giving in to shadow self and attachments."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about dark thoughts and detachment.",
//           "desires": "A desire for releasing limiting beliefs.",
//           "warnings": "Caution against exploring dark thoughts and detachment."
//         }
//       }
//     }
//   },
//   {
//     "id": 17,
//     "name": "The Tower",
//     "upright": "Sudden change, upheaval, chaos, revelation.",
//     "reversed": "Personal transformation, fear of change, averting disaster.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages embracing sudden change and upheaval.",
//           "cons": "Warns against resisting change and chaos.",
//           "outcome": "Suggests that embracing change will lead to revelation."
//         },
//         "reversed": {
//           "pros": "Highlights the need for personal transformation.",
//           "cons": "Indicates potential for fear of change.",
//           "outcome": "Suggests that overcoming fear of change can lead to revelation."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of sudden change and chaos.",
//           "desires": "A desire for revelation and transformation.",
//           "warnings": "Beware of resisting change and chaos."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about personal transformation and change.",
//           "desires": "A desire for averting disaster and change.",
//           "warnings": "Caution against fear of change and resisting transformation."
//         }
//       }
//     }
//   },
//   {
//     "id": 18,
//     "name": "The Star",
//     "upright": "Hope, faith, purpose, renewal.",
//     "reversed": "Lack of faith, despair, self-trust issues.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages hope and faith in decisions.",
//           "cons": "Warns against losing faith and purpose.",
//           "outcome": "Suggests that hope and faith will lead to renewal."
//         },
//         "reversed": {
//           "pros": "Highlights the need for self-trust and renewal.",
//           "cons": "Indicates potential for despair and lack of faith.",
//           "outcome": "Suggests that overcoming self-trust issues can lead to renewal."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of losing faith and purpose.",
//           "desires": "A desire for hope and renewal.",
//           "warnings": "Beware of losing faith and purpose."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about self-trust issues and despair.",
//           "desires": "A desire for renewal and self-trust.",
//           "warnings": "Caution against despair and lack of faith."
//         }
//       }
//     }
//   },
//   {
//     "id": 19,
//     "name": "The Moon",
//     "upright": "Illusion, fear, anxiety, subconscious, intuition.",
//     "reversed": "Release of fear, repressed emotion, inner confusion.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages intuition and subconscious awareness in decisions.",
//           "cons": "Warns against illusion and fear.",
//           "outcome": "Suggests that intuition and awareness will lead to clarity."
//         },
//         "reversed": {
//           "pros": "Highlights the need for releasing fear and repressed emotions.",
//           "cons": "Indicates potential for inner confusion.",
//           "outcome": "Suggests that overcoming inner confusion can lead to clarity."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of illusion and subconscious thoughts.",
//           "desires": "A desire for intuition and clarity.",
//           "warnings": "Beware of fear and anxiety."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about repressed emotions and inner confusion.",
//           "desires": "A desire for releasing fear and confusion.",
//           "warnings": "Caution against inner confusion and repressed emotions."
//         }
//       }
//     }
//   },
//   {
//     "id": 20,
//     "name": "The Sun",
//     "upright": "Positivity, fun, warmth, success, vitality.",
//     "reversed": "Inner child, feeling down, overly optimistic.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages positivity and success in decisions.",
//           "cons": "Warns against being overly optimistic.",
//           "outcome": "Suggests that positivity and success will lead to vitality."
//         },
//         "reversed": {
//           "pros": "Highlights the need for reconnecting with inner child.",
//           "cons": "Indicates potential for feeling down.",
//           "outcome": "Suggests that overcoming feeling down can lead to success."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of failure and negativity.",
//           "desires": "A desire for success and positivity.",
//           "warnings": "Beware of being overly optimistic."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about feeling down and inner child issues.",
//           "desires": "A desire for reconnecting with inner child.",
//           "warnings": "Caution against feeling down and being overly optimistic."
//         }
//       }
//     }
//   },
//   {
//     "id": 21,
//     "name": "Judgement",
//     "upright": "Judgement, rebirth, inner calling, absolution.",
//     "reversed": "Self-doubt, inner critic, ignoring the call.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages inner calling and rebirth in decisions.",
//           "cons": "Warns against self-doubt and inner critic.",
//           "outcome": "Suggests that inner calling and rebirth will lead to absolution."
//         },
//         "reversed": {
//           "pros": "Highlights the need for overcoming self-doubt.",
//           "cons": "Indicates potential for ignoring the call.",
//           "outcome": "Suggests that addressing self-doubt can lead to rebirth."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of judgement and inner critic.",
//           "desires": "A desire for rebirth and inner calling.",
//           "warnings": "Beware of self-doubt and inner critic."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about ignoring the call and self-doubt.",
//           "desires": "A desire for overcoming self-doubt.",
//           "warnings": "Caution against ignoring the call and inner critic."
//         }
//       }
//     }
//   },
//   {
//     "id": 22,
//     "name": "The World",
//     "upright": "Completion, integration, accomplishment, travel.",
//     "reversed": "Seeking closure, short-cuts, delays.",
//     "interpretations": {
//       "decisionMaking": {
//         "upright": {
//           "pros": "Encourages completion and accomplishment in decisions.",
//           "cons": "Warns against taking short-cuts.",
//           "outcome": "Suggests that completion and integration will lead to success."
//         },
//         "reversed": {
//           "pros": "Highlights the need for seeking closure.",
//           "cons": "Indicates potential for delays and short-cuts.",
//           "outcome": "Suggests that overcoming delays can lead to accomplishment."
//         }
//       },
//       "dreamInterpretation": {
//         "upright": {
//           "hiddenFears": "Fear of not completing tasks and integration.",
//           "desires": "A desire for accomplishment and travel.",
//           "warnings": "Beware of taking short-cuts."
//         },
//         "reversed": {
//           "hiddenFears": "Anxiety about delays and short-cuts.",
//           "desires": "A desire for seeking closure.",
//           "warnings": "Caution against delays and taking short-cuts."
//         }
//       }
//     }
//   }
// ];

export default tarotCards;
