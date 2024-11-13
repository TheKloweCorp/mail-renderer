import { MyTemplate } from "../../../emails/my-mail";
import { render } from "@react-email/render";

export const Hteml = await render(<MyTemplate />, {
  pretty: true,
});

console.log(Hteml);
