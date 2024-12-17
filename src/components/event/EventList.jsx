import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
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
import EventForm from "./EventForm";
import UpdateEventForm from "./UpdateEventForm";
import { ScrollArea } from "../ui/scroll-area";

const EventList = ({
  events,
  selectedDay,
  onEdit,
  onDelete,
  onAddEvent
}) => {
  let selectedEvents = [];
  if (events.length > 0) {
    selectedEvents = events.filter((event) => {
      return event.date.getDate() === selectedDay.getDate();
    });
  } else {
    selectedEvents = [];
  }

  return (
    <ScrollArea className=" mt-5 xl:w-[40%] xl:h-[95%] px-5">
      <div className="flex justify-between mb-2">
        <EventForm selectedDay={selectedDay} onAddEvent={onAddEvent} />
      </div>
      <h4 className=" text-center text-2xl font-bold mb-5">
        List of Events -{" "}
        {selectedDay.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </h4>
      <div className="flex flex-wrap justify-around">
        {selectedEvents.length === 0 ? (
          <p>No events for this day</p>
        ) : (
          selectedEvents.map((event, index) => (
            <Card
              key={index}
              className="mb-4 flex flex-col justify-between w-[95%] md:w-[45%] lg:w-[95%] "
            >
              <div className="w-full">
                <CardHeader>{event.name}</CardHeader>
                <CardContent>
                  <p>
                    <strong>Start Time:</strong> {event.start}
                  </p>
                  <p>
                    <strong>End Time:</strong> {event.end}
                  </p>
                  {event.description && (
                    <p>
                      <strong>Description:</strong> {event.description}
                    </p>
                  )}
                </CardContent>
              </div>
              <CardFooter className=" flex gap-4 justify-between">
                <UpdateEventForm event={event} onEdit={onEdit} />
                <Button
                  className="w-1/2"
                  onClick={() => onDelete(event.id)} // Handle deletion
                  variant="destructive"
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </ScrollArea>
  );
};

export default EventList;
