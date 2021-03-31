import requests
import bs4 as bs4
import datetime
class VkBot:

    def __init__(self, user_id):

        print ("Создан объёект бота")
        self._USER_ID = user_id
        seld._USERNAME = seld._get_user_name_from_vk_id(user_id)

        seld._COMMANDS = ["Привет", "Сегодня"]

    def _get_user_name_from_vk_id(seld, user_id):
        request = requests.get("https://vk.com/id"+str(user_id))
        bs = bs4.BeautifulSoup(request.text, "html.parser")

        user_name = self._clean_all_tag_from_str(bs.findAll("title")[0])

        return user_name.split()[0]

    @staticmethod
    def _clean_all_tag_from_str(string_line):

        """
        Очистка строки stringLine от тэгов и их содержимых
        :param string_line: Очищаемая строка
        :return: очищенная строка
        """

        result = ""
        not_skip = True
        for i in list(string_line):
            if not_skip:
                if i == "<":
                    not_skip = False
                else:
                    result += i
            else:
                if i == ">":
                    not_skip = True

        return result

    @staticmethod
    def _get_today():

        today = datetime.datetime.today().weekday()
        request = requests.get("http://schedule.tsu.ru/students_schedule/?faculty_id=78&group_id=37785")
        b = bs4.BeautifulSoup(request.text, "html.parser")
        p3 = b.select('.lessons_cell')
        for i in range(7):
            weather1 = p3[i+today*7].getText("|")
            print(str((i%7)+1) + ". " + weather1)
            if i%7 == 6:
                print("\n")