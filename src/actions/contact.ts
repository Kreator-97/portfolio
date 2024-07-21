'use server'

import { Prisma } from '@prisma/client'
import { db } from '@/database'

export const findContact = async (email: string) => {
  const contact = await db.contact.findFirst({
    where: {
      email
    }
  })

  return contact
}

export const saveContact = async (payload: Prisma.ContactCreateInput) => {

  const contactExists = await findContact(payload.email)

  console.log({ contactExists })

  if( contactExists ) {
    return await updateContact(
      contactExists.id,
      {
        id: contactExists.id,
        email: payload.email,
        message: payload.message,
        subject: payload.subject
      }
    )
  }

  const { email, message, subject } = payload
  const contact = await db.contact.create({
    data: {
      email,
      message,
      subject
    }
  })

  return contact
}

const updateContact = async (id: string, contact: Prisma.ContactUpdateInput) => {
  const updatedContact = await db.contact.update({
    where: {
      id,
    },
    data: {
      email: contact.email,
      message: contact.message,
      subject: contact.subject
    }
  })

  return updatedContact
}
