import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="16" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
         
          <SelectItem value="16">16</SelectItem>
          <SelectItem value="32">32</SelectItem>
          <SelectItem value="48">48</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
