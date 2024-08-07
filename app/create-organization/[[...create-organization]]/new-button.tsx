"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { Plus } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { CreateOrganization } from "@clerk/nextjs";

export default function NewButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <button className="bg-white/25
                    h-full w-full rounded-md
                    flex items-center justify-center
                    opacity-60 hover:opacity-100
                    transition">
                        <Plus className="text-white" />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    <DialogDescription></DialogDescription>
                    <CreateOrganization />
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}