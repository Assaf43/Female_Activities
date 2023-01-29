import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activiy) => (
          <Item key={activiy.id}>
            <Item.Content>
              <Item.Header as={"a"}>{activiy.title}</Item.Header>
              <Item.Meta>{activiy.date}</Item.Meta>
              <Item.Description>
                <div>{activiy.description}</div>
                <div>
                  {activiy.city},{activiy.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activiy.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(activiy.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activiy.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
