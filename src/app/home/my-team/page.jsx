import Card from "@/components/Card";

import Layout from "@/common/Layout";
import Button from "@/common/Button";
import { AddIcon, UpLoadIcon } from "@/common/Icons";

export default function MyTeam() {
  return (
    <Layout>
      <Card
        className="h-full grid place-items-center"
        imageBottom="/girl.svg"
        paragraph="You havnet't loaded any  employees yet."
      >
        <div className="flex gap-2 mt-4">
          <Button
            body="Load Team Members"
            icon={<AddIcon />}
            variant="secondary"
            size="big"
            className="rounded-md"
          />
          <Button
            body="Add Team Members"
            icon={<UpLoadIcon />}
            variant="primary"
            size="big"
            className="rounded-md"
          />
        </div>
      </Card>
    </Layout>
  );
}
