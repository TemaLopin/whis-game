import petImages from '../components/pets-images'

export const getPetsImages = () => petImages

export const getGameText = (isMainGame: boolean) => ({
  descItem: isMainGame
    ? [
        'Выберите по одной характеристике',
        'в каждой строке. Когда все четыре',
        'характеристики выбраны, нажмите',
        'кнопку «Это про меня!»',
      ]
    : [
        'ВЫБЕРИТЕ В КАЖДОЙ СТРОЧКЕ ПО ОДНОЙ',
        'ХАРАКТЕРИСТИКЕ, БЛИЗКОЙ ВАШЕМУ ПИТОМЦУ.',
        'КОГДА ТРИ ХАРАКТЕРИСТИКИ ВЫБРАНЫ,',
        'НАЖМИТЕ «ГОТОВО!»',
      ],

  descItemDesktop: isMainGame
    ? [
        'Выберите по одной характеристике',
        'в каждой строке. Когда все четыре характеристики',
        ' выбраны, нажмите кнопку «Это про меня!»',
      ]
    : [
        'ВЫБЕРИТЕ В КАЖДОЙ СТРОЧКЕ ПО ОДНОЙ ХАРАКТЕРИСТИКЕ',
        'Выберите , БЛИЗКОЙ ВАШЕМУ ПИТОМЦУ. КОГДА',
        'ТРИ ХАРАКТЕРИСТИКИ ВЫБРАНЫ, НАЖМИТЕ «ГОТОВО!»',
      ],

  selectsGame: isMainGame
    ? [
        { title: '?', category: 1 },
        { title: '?', category: 2 },
        { title: '?', category: 3 },
        { title: '?', category: 4 },
      ]
    : [
        { title: '?', category: 1 },
        { title: '?', category: 2 },
        { title: '?', category: 3 },
      ],
})
