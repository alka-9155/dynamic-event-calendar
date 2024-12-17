// src/components/event/EventForm.jsx

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventForm = ({ selectedDay, onAddEvent }) => {
  const [eventName, setEventName] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = () => {
    const newEvent = {
      id: Date.now(),
      name: eventName,
      start: eventStart,
      end: eventEnd,
      description: eventDescription,
      date: selectedDay,
    };
    onAddEvent(newEvent);
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-900 px-3 py-2 rounded-lg w-full text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
        Add Event
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Card className="mt-5">
          <CardContent className="mt-5">
            <Input
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Event Name"
              className="mb-4"
            />
            <CardDescription className="grid grid-cols-2 gap-4">
              <Input
                value={eventStart}
                onChange={(e) => setEventStart(e.target.value)}
                type="time"
                placeholder="Start Time"
              />
              <Input
                value={eventEnd}
                onChange={(e) => setEventEnd(e.target.value)}
                type="time"
                placeholder="End Time"
              />
            </CardDescription>
            <Textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Description"
              className="mt-4"
            />
          </CardContent>
        </Card>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" onClick={handleSubmit}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventForm;
