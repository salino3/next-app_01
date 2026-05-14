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

  console.log("clog5", id);

  if (id) {
    return { success: true, error: "", id };
  }

  return { success: true, error: "" };
}
