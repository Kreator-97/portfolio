import { english, spanish } from '@/i18n'
import { Card, IconWithText, List } from '.'

export const HardSkills = ({lang}: { lang: string }) => {
  const t = lang === 'es' ? spanish : english

  return (
    <div id='skills' className='pt-8 md:pt-20'>
      <h2 className="heading">
        { t.hardSkills.title }
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card
          title={ t.hardSkills.webTecnologies.title }
          description={
            t.hardSkills.webTecnologies.description
          }
        >
          <div className='flex justify-center py-4 gap-8'>
            {
              t.hardSkills.webTecnologies.icons.map((icon) => (
                <IconWithText
                  key={icon.title}
                  iconURL={icon.iconURL}
                  title={icon.title}
                />
              ))
            }
          </div>

          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>

          <List
            items={
              t.hardSkills.webTecnologies.details
            }
          />
        </Card>

        <Card
          title={ t.hardSkills.reactEcosystem.title }
          description={
            t.hardSkills.reactEcosystem.description
          }
        >
          <div className='py-4 flex gap-8 justify-center flex-wrap'>
            {
              t.hardSkills.reactEcosystem.icons.map((icon) => (
                <IconWithText
                  key={icon.title}
                  iconURL={icon.iconURL}
                  title={icon.title}
                />
              ))
            }
          </div>
          
          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>
          <List items={ t.hardSkills.reactEcosystem.details } />
        </Card>

        <Card
          title={ t.hardSkills.typescript.title }
          description={
            t.hardSkills.typescript.description
          }
        >
          <div className='py-4 flex gap-8 justify-center'>
            <IconWithText iconURL={'/icons/typescript.svg'} title='TypeScript' />
          </div>

          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>
        
          <List items={ t.hardSkills.typescript.details } />
        </Card>

        <Card
          title={
            t.hardSkills.serverApplications.title
          }
          description={
            t.hardSkills.serverApplications.description
          }
        >
          <div className='py-4 flex gap-8 justify-center flex-wrap'>
            {
              t.hardSkills.serverApplications.icons.map((icon) => (
                <IconWithText
                  key={icon.title}
                  iconURL={icon.iconURL}
                  title={icon.title}
                />
              ))
            }
          </div>
          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>

          <List
            items={
              t.hardSkills.serverApplications.details
            }
          />
        </Card>

        <Card
          title={
            t.hardSkills.docker.title
          }
          description={
            t.hardSkills.docker.description
          }
        >
          <div className='py-4 flex gap-8 justify-center'>
            {
              t.hardSkills.docker.icons.map((icon) => (
                <IconWithText
                  key={icon.title}
                  iconURL={icon.iconURL}
                  title={icon.title}
                />
              ))
            }
          </div>
          
          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>

          <List items={ t.hardSkills.docker.details } />
        </Card>

        <Card
          title={ t.hardSkills.shopify.title }
          description={
            t.hardSkills.shopify.description
          }
        >
          <div className='py-4 flex gap-8 justify-center'>
            {
              t.hardSkills.shopify.icons.map((icon) => (
                <IconWithText
                  key={icon.title}
                  iconURL={icon.iconURL}
                  title={icon.title}
                />
              ))
            }
            {/* <IconWithText iconURL={'/icons/shopify.svg'} title='shopify' /> */}
          </div>
          
          <h3 className='text-dark dark:text-light text-center text-lg font-bold mb-2'>
            {
              t.common.proficientIn
            }
          </h3>

          <List items={ t.hardSkills.shopify.details } />
        </Card>

        <div className='col-span-1 md:col-span-2'>
          <Card
            title={
              t.hardSkills.otherTools.title
            }
            description={
              t.hardSkills.otherTools.description
            }
          >
            <div className='py-4 flex gap-x-8 gap-y-4 justify-center flex-wrap items-end'>
              {
                t.hardSkills.otherTools.items.map((item) => (
                  <IconWithText
                    key={item.title}
                    iconURL={item.iconURL}
                    title={item.title}
                  />
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
