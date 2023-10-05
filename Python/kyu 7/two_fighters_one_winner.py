# Create a function that returns the name of the winner in a fight between two fighters.

# Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

# Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

# Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

# Your function also receives a third argument, a string, with the name of the fighter that attacks first.

class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack
        
    def __str__(self): return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)
    __repr__=__str__




def declare_winner(fighter1, fighter2, first_attacker):
    if fighter1.name == first_attacker:
        while fighter1.health > 0 and fighter2.health > 0:
            fighter2.health = fighter2.health - fighter1.damage_per_attack
            if fighter2.health <= 0:
                return fighter1.name
            fighter1.health = fighter1.health - fighter2.damage_per_attack
            if fighter1.health <= 0:
                return fighter2.name
    else:
        while fighter2.health > 0 and fighter1.health > 0:
            fighter1.health = fighter1.health - fighter2.damage_per_attack
            if fighter1.health <= 0:
                return fighter2.name
            fighter2.health = fighter2.health - fighter1.damage_per_attack
            if fighter2.health <= 0:
                return fighter1.name

        

print(declare_winner(Fighter("Mike", 50, 6), Fighter("Evander", 55, 5), "Evander"))