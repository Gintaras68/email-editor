import React from "react";
import { emailService } from "../../services/email.services";
import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import "./email-list.scss"

export function EmailList() {
  const {data} = useQuery({
    queryKey: ['email list'],
    queryFn: () => emailService.getEmails()
  });

  return(<>
    <div className="list">
      <h4>List of mails</h4>
      <ul>
        {data?.map(email => (
          <li key={email.text}>{parse(email.text)}</li>
        ))}
      </ul>
    </div>
  </>)
}