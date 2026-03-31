import React from "react";

import Modal from "@/components/Modal";
import { Photo } from "@/components/Photo";

export default async function ModalPhoto({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <Photo.PageContent id={params.id} />
    </Modal>
  );
}
