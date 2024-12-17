import React, { useState } from "react";
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
import { Input } from "../ui/input";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const UpdateEventForm = ({ event, onEdit }) => {
  const [eventName, setEventName] = useState(event.name);
  const [eventStart, setEventStart] = useState(event.start);
  const [eventEnd, setEventEnd] = useState(event.end);
  const [eventDescription, setEventDescription] = useState(event.description);

  const handleSubmit = () => {
    onEdit({
      ...event,
      name: eventName,
      start: eventStart,
      end: eventEnd,
      description: eventDescription,
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-neutral-900 px-3 py-2 rounded-lg w-1/2 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
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
            <Button className=" w-full" onClick={handleSubmit}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEventForm;
