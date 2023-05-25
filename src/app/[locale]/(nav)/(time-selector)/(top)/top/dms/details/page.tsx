import Image from "next/image";
import { useTranslation } from "~/i18n";
import { PageProps } from "~/types";
import PageHeader from "./_components/PageHeader";
import ProfileHeader from "~/components/ProfileHeader";
import Stats from "./_components/Stats";
import DailySentMessages from "./_components/DailySentMessages";

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await useTranslation(locale);

  const name = "Androz";

  return (
    <>
      <PageHeader title={name} />
      <ProfileHeader
        description="@androz2091"
        title={name}
        imageSlot={
          <div className="relative h-16 w-16">
            <Image
              src="https://cdn.discordapp.com/embed/avatars/5.png"
              alt="Avatar"
              fill
              priority
              className="rounded-full object-cover object-center"
            />
          </div>
        }
      />
      <Stats />
      <DailySentMessages />
    </>
  );
}
