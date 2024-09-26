import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/CompanionForm";

interface CompanionIdPageProps {
    params: {
        companionId: string
        
    }
}
const CompanionIdPage = async({
    params
}:CompanionIdPageProps) => {
    //TODO: check suscription

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (  
        <CompanionForm data={companion} categories={categories}/>
    );
}
 
export default CompanionIdPage;