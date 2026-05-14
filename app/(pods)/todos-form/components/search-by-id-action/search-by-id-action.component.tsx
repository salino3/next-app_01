"use server";

export interface ActionState {
  success: boolean;
  error: string;
  id?: any;
}

export async function searchByIdAction(
  prevState: any,
  formData: FormData,
): Promise<ActionState> {
  const { id } = Object.fromEntries(formData.entries());

  //x It is true if the string is convertible to a number
  if (!isNaN(Number(id)) && id) {
    return { success: true, error: "", id };
  }

  return { success: true, error: "" };
}
