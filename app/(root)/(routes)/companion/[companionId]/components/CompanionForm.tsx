'use client'

import { Category, Companion } from "@prisma/client"

interface CompanionFormProps {
    data : Companion | null;
    categories : Category[];
}
export const CompanionForm = ({
    categories,
    data
}: CompanionFormProps) => {
    return (
        <div>
            companion form
        </div>
    )
}

