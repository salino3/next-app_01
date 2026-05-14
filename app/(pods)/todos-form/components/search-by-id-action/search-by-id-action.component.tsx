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

  if (id && isNaN(Number(id))) {
    return { success: false, error: "Search todo value is not a number", id };
  }

  if (id && Number(id) < 1) {
    return {
      success: false,
      error: "Negative search todo value is not allowed",
      id,
    };
  }

  // It is true if the string is convertible to a number
  if (!isNaN(Number(id)) && id) {
    console.log("clog8", id);
    return { success: true, error: "", id };
  }

  return { success: true, error: "" };
}
