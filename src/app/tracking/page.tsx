"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const roadmapData = [
  {
    step: " Vocal Training",
    topics: [
      "Breath Control Techniques",
      "Vocal Warm-Ups",
      "Range Expansion Exercises",
    ],
  },
  {
    step: " Repertoire Development",
    topics: [
      "Song Selection",
      "Cover Songs vs. Originals",
      "Genre Exploration",
    ],
  },
  {
    step: " Performance Skills",
    topics: ["Stage Presence", "Audience Engagement", "Microphone Techniques"],
  },
  {
    step: " Branding and Marketing",
    topics: [
      "Social Media Presence",
      "Personal Branding",
      "Music Promotion Strategies",
    ],
  },
  {
    step: " Recording and Production",
    topics: [
      "Finding a Producer",
      "Songwriting and Composition",
      "Studio Recording Techniques",
    ],
  },
  {
    step: " Networking",
    topics: [
      "Industry Connections",
      "Collaborations with Other Artists",
      "Attending Music Events",
    ],
  },
  {
    step: " Live Performances",
    topics: ["Booking Gigs", "Tour Planning", "Soundcheck Procedures"],
  },
];

const Roadmap = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100 p-4 h-[33rem]">
        <Accordion type="single" collapsible className="w-full">
          {roadmapData.map((step, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {step.step}
              </AccordionTrigger>
              <AccordionContent>
                {step.topics.map((topic, topicIndex) => (
                  <Button
                    key={topicIndex}
                    variant="ghost"
                    className="w-full justify-start pl-4 mb-1"
                    onClick={() => setSelectedTopic(`${step.step} - ${topic}`)}
                  >
                    {topic}
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right content area */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">
          {selectedTopic || "Select a topic to view details"}
        </h2>
        {selectedTopic && <p> {selectedTopic} </p>}
      </div>
    </div>
  );
};

export default Roadmap;
