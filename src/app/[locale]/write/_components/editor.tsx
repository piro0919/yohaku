import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import * as locales from "@blocknote/core/locales";

// Our <Editor> component we can reuse later
export default function Editor(): React.JSX.Element {
  const locale = useLocale();
  const { theme } = useTheme();
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    dictionary: locales[locale as keyof typeof locales],
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={theme as "light" | "dark"} />;
}
