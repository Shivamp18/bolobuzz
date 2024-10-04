import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { useCreateChannelModal } from "../store/use-create-channel-modal"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useCreateChannel } from "../api/use-create-channel";
import { toast } from "sonner";
import { useworkspaceId } from "@/hooks/use-workspace-id";


export  const CreateChannelModal = ()=>{

     const workspaceId = useworkspaceId();
    const [open,setOpen] = useCreateChannelModal();

    const { mutate,isPending} = useCreateChannel();
    const [name,setName] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value.replace(/\s+/g,"-").toLowerCase();
        setName(value)  
     }

     const handleClose=()=>{
        setName("");
        setOpen(false);
     }

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        mutate({
            name,workspaceId
        },{
            OnSuccess:()=>{
                toast.success("Channel Created Successfully")
                handleClose();
            },
            OnError:()=>{
               toast.error
            }
        })
     }
    return (
       <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a channel</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4"> 
           <Input 
           value ={name}
           disabled={isPending}
           onChange={handleChange}
        required
        autoFocus
        minLength={3}
        maxLength={60}
        placeholder="e.g plan-budget"

            />
            <div className="flex justify-end">
                <Button disabled={false}>
                    Create

                </Button>
            </div>
          </form>

        </DialogContent>
       </Dialog>
    )
}