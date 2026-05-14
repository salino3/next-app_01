"use server";

export interface ActionState {
  success: boolean;
  error: string | null; // <--- Cambiato da null a string | null
}

export async function searchByIdAction(
  prevState: any,
  formData: FormData,
): Promise<ActionState> {
  return { success: true, error: "" };
}
